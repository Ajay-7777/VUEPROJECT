<template>
   
        <select class="selector font-family-selector " @change="changeproperty('font-family-selector',$event)">
            <option v-for="option in options" class="section" :value="option" >{{ option }}</option>
        </select>
        <select class="selector font-size-selector" @change="changeproperty('font-size-selector',$event)" >
            <option v-for="num in numbers" :value="num" >{{ num[0]+num[1] }}</option>
        </select>
        <div class="material-icons menu-icon  style-icon" v-for="post in posts" v-bind:class="post.id" @click="changeproperty(post.id,$event)">{{ post.title }}
        </div>
        <div class="material-icons menu-icon align-icon " v-for="post1 in posts1" v-bind:class="post1.id1">{{ post1.title1 }}</div>
        <div class="menu-icon icon-color-fill" @change="changeproperty('icon-color-fill',$event)" >
            <input class="color-picker background-color-picker" type="color" value="#fffff" />
            <div class="material-icons color-fill-icon " >format_color_fill</div>
        </div>
        <div class="menu-icon icon-color-text" @change="changeproperty('icon-color-text',$event)">
            <input class="color-picker text-color-picker" type="color" value="black" />
            <div class="material-icons color-fill-text">format_color_text</div>
        </div>
       <Opensave v-bind:sheetDB="this.sheetDB" v-bind:graphComponentMatrix="this.graphcomponentmatrix"  v-bind:collectedGraphComponent="this.collectedGraphComponent" v-bind:collectedSheetDB="this.collectedSheetDB" />
         <button class="savedb">Save </button>
        <button class="opendb">Open</button>
  
</template>
<script>
// import Cutcopypaste from './Cutcopypaste'
import Opensave from './opensave'
import getCell from '../mixins/getCell'




export default {
    iconbar: "Iconbar",
    components:{
      
        Opensave
    },
    props: ['addressBar', 'sheetDB', 'inputcellval','graphComponentMatrix','collectedGraphComponent','collectedSheetDB'],
    mixins:[getCell],
    data() {

        return {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "Noto Sans",
            fontSize: "10",
            fontColor: "#000000",
            BGcolor: "#000000",  // Just for indication purpose,
            value: "",
            formula: "",
            children: [],
            leftAlign:"",
            rightAlign:"",
            centerAlign:"",
            activeColorProp: "#d1d8e0",
            inactiveColorProp: "#ecf0f1",
          
            posts1: [
                { id1: 'left', title1: 'format_align_left' },
                { id1: 'center', title1: 'format_align_center' },
                { id1: 'right', title1: 'format_align_right' }
            ],
            posts: [
                { id: 'icon-bold', title: 'format_bold' },
                { id: 'icon-italic', title: 'format_italic' },
                { id: 'icon-underline', title: 'format_underline' }
            ],
            numbers: ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
            options: ['Noto Sans', 'Arial', 'Calibri', 'Comic Sans MS', "Courier New", "Impact", "Garamond", "Lato", "Open Sans", "Palatino", "Verdana"]
        };
    },
    methods: {

        // getCellAndCellProp: function (address) {
        //     let sheetDB = JSON.parse(JSON.stringify(this.sheetDB));

        //     let [rid, cid] = this.decodeRIDCIDFromAddress(address);
        //     // Access cell & storage object
        //     let cell = document.querySelector(`.input-cell[rid="${rid}"][cid="${cid}"]`);
        //     let cellProp = sheetDB[rid][cid];
        //     return [cell, cellProp];
        // },
        greetUser(cellProp) {  
        this.bold.style.backgroundColor = cellProp.bold ? this.activeColorProp : this.inactiveColorProp;
        this.italic.style.backgroundColor = cellProp.italic ? this.activeColorProp : this.inactiveColorProp;
        this.underline.style.backgroundColor = cellProp.underline ? this.activeColorProp : this.inactiveColorProp;
        this.fontColor.value = cellProp.fontColor;
        this.BGcolor.value = cellProp.BGcolor;
        this.fontSize.value = cellProp.fontSize;
        this.fontFamily.value = cellProp.fontFamily;
        switch(cellProp.alignment) { // UI change (2)
            case "left":
                this.leftAlign.style.backgroundColor = this.activeColorProp;
                this.centerAlign.style.backgroundColor = this.inactiveColorProp;
                this.rightAlign.style.backgroundColor = this.inactiveColorProp;
                break;
            case "center":
                this.leftAlign.style.backgroundColor = this.inactiveColorProp;
                this.centerAlign.style.backgroundColor = this.activeColorProp;
                this.rightAlign.style.backgroundColor = this.inactiveColorProp;
                break;
            case "right":
                this.leftAlign.style.backgroundColor = this.inactiveColorProp;
                this.centerAlign.style.backgroundColor = this.inactiveColorProp;
                this.rightAlign.style.backgroundColor = this.activeColorProp;
                break;
        }

       
         },
         changeproperty(id,event){
            let address = this.addressBar;
            let [cell, cellProp] = this.getCellAndCellProp(address);
            let [rid, cid] = this.decodeRIDCIDFromAddress(address);
            if(id ==='icon-bold'){
            // Modification
            cellProp.bold = !cellProp.bold; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
            this.bold.style.backgroundColor = cellProp.bold ? this.activeColorProp : this.inactiveColorProp; // UI change (2)
        }else if(id=='icon-italic'){
            cellProp.italic = !cellProp.italic; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
            this.italic.style.backgroundColor = cellProp.italic ? this.activeColorProp : this.inactiveColorProp; // UI change (2)
        }else if(id==='icon-underline'){
            cellProp.underline = !cellProp.underline; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
            this.underline.style.backgroundColor = cellProp.underline ? this.activeColorProp : this.inactiveColorProp; // UI change (2)
         }
         else if(id=== 'font-family-selector'){
            console.log(id)
            cellProp.fontFamily = this.fontFamily.value; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.fontFamily = cellProp.fontFamily;
            this.fontFamily.value = cellProp.fontFamily;
         }
         else if(id==='font-size-selector'){
            cellProp.fontSize = this.fontSize.value; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.fontSize = cellProp.fontSize + "px";
            this.fontSize.value = cellProp.fontSize;
              }
        else if(id ==='icon-color-text'){
            cellProp.fontColor = this.fontColor.value; // Data change
            cell.style.color = cellProp.fontColor;
            this.fontColor.value = cellProp.fontColor;
            this.sheetDB[rid][cid] = cellProp;

        }else if(id==='icon-color-fill'){
            cellProp.BGcolor = this.BGcolor.value; // Data change
            this.sheetDB[rid][cid] = cellProp;
            cell.style.backgroundColor = cellProp.BGcolor;
            this.BGcolor.value = cellProp.BGcolor;
        }
       
    },
   
},
    mounted() {

        // let allCells = document.querySelectorAll(".input-cell");
        // console.log(allCells)
        // for (let i = 0;i <10;i++) {
        //     console.log('hil')
        //     this.addListenerToAttachCellProperties(allCells[i]);
        // }
        this.bold = document.querySelector(".icon-bold");
        this.italic = document.querySelector(".icon-italic");
        this.underline = document.querySelector(".icon-underline");
        this.fontSize = document.querySelector(".font-size-selector");
        this.fontFamily = document.querySelector(".font-family-selector");
        this.fontColor = document.querySelector(".text-color-picker");
        this.BGcolor = document.querySelector(".background-color-picker");
        this.alignment = document.querySelectorAll(".align-icon");
        this.leftAlign = this.alignment[0];
        this.centerAlign = this.alignment[1];
        this.rightAlign = this.alignment[2];


       
        this.alignment.forEach((alignElem) => {
            alignElem.addEventListener("click", (e) => {
                let address = this.addressBar;
                let [cell, cellProp] = this.getCellAndCellProp(address);
                let [rid, cid] = this.decodeRIDCIDFromAddress(address);
                let alignValue = e.target.classList;

                cellProp.alignment = alignValue[3]; // Data change
                this.sheetDB[rid][cid] = cellProp;
                cell.style.textAlign = cellProp.alignment; // UI change (1)

                switch (alignValue[3]) { // UI change (2)
                    case "left":
                        this.leftAlign.style.backgroundColor = this.activeColorProp;

                        this.centerAlign.style.backgroundColor = this.inactiveColorProp;
                        this.rightAlign.style.backgroundColor = this.inactiveColorProp;
                        break;
                    case "center":
                        this.leftAlign.style.backgroundColor = this.inactiveColorProp;
                        this.centerAlign.style.backgroundColor = this.activeColorProp;
                        this.rightAlign.style.backgroundColor = this.inactiveColorProp;
                        break;
                    case "right":
                        this.leftAlign.style.backgroundColor = this.inactiveColorProp;
                        this.centerAlign.style.backgroundColor = this.inactiveColorProp;
                        this.rightAlign.style.backgroundColor = this.activeColorProp;
                        break;
                }

            })
        })
        // let allCells = this.inputcellval;
    }
}
</script>
<style>
.section {
    font-family: v-bind('options');
}
</style>

