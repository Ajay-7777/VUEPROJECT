<template>
    <div class="sheet-actions-cont">
        <div class="sheet-add-icon" @click="addsheetBTN">
            <span class="material-icons">
                post_add
            </span>
        </div>
        <div class="sheets-folder-cont">
        </div>
    </div>
</template>
<script>
export default{
    Sheethandling:"Sheethandling",
    data(){
        return{
        activeSheetColor :"#ced6e0",
     
    }
},

props:{
    collectedGraphComponent :Object,
    collectedSheetDB :Object,
    
  
},
    methods:{

addsheetBTN(){

    let sheet = document.createElement("div");
    sheet.setAttribute("class", "sheet-folder");
    
    let allSheetFolders = document.querySelectorAll(".sheet-folder");
    sheet.setAttribute("id", allSheetFolders.length);

    sheet.innerHTML = ` <div class="sheet-content">Sheet ${allSheetFolders.length + 1}</div>`;
    let sheetsFolderCont=document.querySelector(".sheets-folder-cont");
    sheetsFolderCont.appendChild(sheet); 
    sheet.scrollIntoView();

    // DB
    this.createSheetDB();
    this.createGraphComponentMatrix();
    this.handleSheetActiveness(sheet);
    this.handleSheetRemoval(sheet);
    sheet.click();
}

,
 handleSheetRemoval(sheet) {
    sheet.addEventListener("mousedown", (e) => {
        // Right click
        if (e.button !== 2) return;

        let allSheetFolders = document.querySelectorAll(".sheet-folder");
        if (allSheetFolders.length === 1) {
            alert("You need to have atleast one sheet!!");
            return;
        }

        let response = confirm("Your sheet will be removed permanently, Are you sure?");
        if (response === false) return;

        let sheetIdx = Number(sheet.getAttribute("id"));
        // DB
        this.collectedSheetDB.splice(sheetIdx, 1);
        this.collectedGraphComponent.splice(sheetIdx, 1);
        // UI
        this.handleSheetUIRemoval(sheet)

        // By default DB to sheet 1 (active)
        this.handleSheetDB(0);
      
       
    })
},
 handleSheetUIRemoval(sheet) {
    sheet.remove();
    let allSheetFolders = document.querySelectorAll(".sheet-folder");
    for (let i = 0;i < allSheetFolders.length;i++) {
        allSheetFolders[i].setAttribute("id", i);
        let sheetContent = allSheetFolders[i].querySelector(".sheet-content");
        sheetContent.innerText = `Sheet ${i+1}`;
        allSheetFolders[i].style.backgroundColor = "transparent";
    }

    allSheetFolders[0].style.backgroundColor = this.activeSheetColor;
},
handleSheetDB(sheetIdx) {
    this.sheetDB = this.collectedSheetDB[sheetIdx];
    this.graphComponentMatrix = this.collectedGraphComponent[sheetIdx];
    this.$emit("getsheet",this.sheetDB,this.graphComponentMatrix);

},
handleSheetProperties() {
    // for (let i = 0; i < 100; i++) {
    //     for (let j = 0; j < 26; j++) {
    //         this.$emit("getinputCell",i,j);
    //     }
    // }
},
handleSheetUI(sheet) {
    console.log("UI")
    let allSheetFolders = document.querySelectorAll(".sheet-folder");
    for (let i = 0; i < allSheetFolders.length; i++) {
        allSheetFolders[i].style.backgroundColor = "transparent";
    }
    sheet.style.backgroundColor = this.activeSheetColor;
},
handleSheetActiveness(sheet) {
    sheet.addEventListener("click", (e) => {
        let sheetIdx = Number(sheet.getAttribute("id"));
        
        this.handleSheetDB(sheetIdx);
        this.handleSheetProperties();
        this.handleSheetUI(sheet);
       
    })

    },
    createSheetDB() {
     let sheetDB = [];
    for (let i = 0; i < 100; i++) {
        let sheetRow = [];
        for (let j = 0; j < 26; j++) {
            let cellProp = {
                bold: false,
                italic: false,
                underline: false,
                alignment: "left",
                fontFamily: "Noto Sans",
                fontSize: "14",
                fontColor: "#000000",
                BGcolor: "#000000",  // Just for indication purpose,
                value: "",
                formula: "",
                children: [],
            }
            sheetRow.push(cellProp);
        }
        sheetDB.push(sheetRow);
    }
    this.collectedSheetDB.push(sheetDB);
},

createGraphComponentMatrix() {
    let graphComponentMatrix = [];
    for (let i = 0; i < 100; i++) {
        let row = [];
        for (let j = 0; j < 26; j++) {
            // Why array -> More than 1 child relation(dependency)
            row.push([]);
        }
        graphComponentMatrix.push(row);
    }

    this.collectedGraphComponent.push(graphComponentMatrix);
}

}
}

</script>
<style scoped>
.shee{
    height: 80%;
    text-decoration: underline;
    font-weight: bold;
    text-decoration-thickness: 3px;
    font-size: 0.9rem;
    /* background-color: lightblue; */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sheet-actions-cont {
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    gap: 1rem;
    background-color: #ecf0f1;
}
.sheet-actions-cont > * {
    display: inline-block;
}
.sheet-add-icon {
    width: 2vw;
}
.sheet-add-icon:hover {
    cursor: pointer;
}

.sheets-folder-cont {
    display: flex;
    align-items: center;
    height: 80%;
    width: 5rem;
    width: calc( 100vw - 2vw );
    overflow: auto;
}

.sheet-content {
    width: 5rem;


    /* background-color: lightgreen; */
}
</style>