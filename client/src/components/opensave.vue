<template>
  
    <span class="material-icons download" curser="pointer" @click="dwnld">
        cloud_download
    </span>
    <span class="material-icons open" @click="upload">
        cloud_upload
    </span>
   
</template>
<script>
export default{
    Opensave:"Opensave",
    props:['sheetDB','graphComponentMatrix','collectedGraphComponent','collectedSheetDB'],
    data(){
        return{

        }
    },
    methods:{
      dwnld(){
        let jsonData = JSON.stringify([this.sheetDB,this.graphComponentMatrix]);
        let file = new Blob([jsonData], { type: "application/json" });

        let a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = "SheetData.json";
        a.click();
      }
      ,
      upload(){
        let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change", (e) => {
        let fr = new FileReader();
        let files = input.files;
        let fileObj = files[0];

        fr.readAsText(fileObj);
        fr.addEventListener("load", (e) => {
            let readSheetData = JSON.parse(fr.result);

            // Basic sheet with default data will be created
            addSheetBtn.click();

            // SheetDB, graphComponent
            this.sheetDB = readSheetData[0];
            this.graphComponentMatrix = readSheetData[1];
            this.collectedSheetDB[collectedSheetDB.length-1] = this.sheetDB;
            this.collectedGraphComponent[collectedGraphComponent.length-1] = this.graphComponentMatrix;

            handleSheetProperties();
        })
    })
      }
    }

}

</script>
<style scoped>

</style>