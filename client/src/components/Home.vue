<template>
    <div class="title-bar">Excel</div>
    <div class="menu-bar">
        <!-- <div class="menufile menu-item ">File</div> -->
        <div class="menu-home  menu-item selected">Home</div>
        <!-- <div class="menu-insert  menu-item">Insert</div> -->
    </div>
</template>
<script>
export default{
    home:"Home",
}

</script>
<style scoped>
.title-bar{
    height: 5vh;
   background-color:#107c41;
   display: flex;
   justify-content: center;
   align-items: center;
  color: white;
}
.menu-bar{
    height: 5vh;
   background-color: #107c41;
   display: flex;

}
</style>