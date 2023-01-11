<template>
    
    
<div class="menu-icon-bar">
    <div class="material-icons menu-icons icon-cut">content_cut</div>
    <div class="material-icons menu-icons icon-copy">content_copy</div>
    <div class="material-icons menu-icons icon-paste">content_paste</div>
    <select class="selector font-family-selector ">
     <option style="font-family: Noto Sans" value="Noto Sans">Noto Sans</option>
     <option style="font-family:Arial" value="Arial">Arial</option>
     <option style="font-family:Calibri" value="Calibri">Calibri</option>
     <option style="font-family:Comic Sans MS" value="Comic Sans MS">Comic Sans MS</option>
     <option style="font-family:Courier New" value="Courier New">Courier New</option> 
     <option style="font-family: Impact" value="Impact">Impact</option>
     <option style="font-family: Georgia" value="Georgia">Georgia</option>
     <option style="font-family:Garamond" value="Garamond">Garamond</option>
     <option style="font-family: Lang" value="Lato">Lato</option>
     <option style="font-family:Open Sans" value="Open Sans">Open Sans</option>
     <option style="font-family:Palatino" value="Palatino">Palatino</option>
     <option style="font-family:Verdana" value="Verdana">Verdana</option>
    </select>
    <select  class="selector font-size-selector">    
     <option   value="10px">10</option>
     <option value="12px" selected>12</option>
     <option value="14px" >14</option>
     <option value="16px">16</option>
     <option value="18px">18</option>
     <option value="20px">20</option>
     <option value="22px">22</option>
     <option value="24px">24</option>
     <option value="26px">26</option>
     <option value="28px">28</option>
     <option value="30px">30</option>
     <option value="32px">32</option>
    </select>
    <div class="material-icons menu-icon icon-bold style-icon">format_bold</div>
    <div class="material-icons menu-icon icon-italic style-icon">format_italic</div>
    <div class="material-icons menu-icon icon-underline style-icon">format_underline</div>
    <div class="material-icons menu-icon icon-align-left selected align-icon " >format_align_left</div>
    <div class="material-icons menu-icon  icon-align-center  align-icon">format_align_center</div>
    <div class="material-icons menu-icon icon-align-right  align-icon" >format_align_right</div>         
    <div class="menu-icon icon-color-fill">
     <input  class="color-picker background-color-picker" type="color" value="#fffff" />
     <div class="material-icons color-fill-icon " >format_color_fill</div>
    </div>
    <div class="menu-icon icon-color-text">
     <input  class="color-picker text-color-picker"  type="color" value="black"/>
     <div class="material-icons color-fill-text">format_color_text</div>
    </div>
    <span class="material-icons download" curser="pointer">
     cloud_download
     </span>
     <span class="material-icons open">
     cloud_upload
      </span>
      
        <button class="savedb" >Save</button>
        <button class="opendb" >Open</button>
    
      
 </div>
</template>
<script>
export default{
    iconbar:"Iconbar",
   
}

</script>
<style>

</style>

