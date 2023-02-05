<template>
   
    <div class="material-icons menu-icons " v-for="item in copy" :class="item.id2"
        @click="copycutpaste(item.id2, $event)">{{ item.title2 }}</div>
 
</template>
<script>
import getCell from '../mixins/getCell'

export default {
    cutcopypaste: "Cutcopypaste",
    mixins: [getCell],
    data() {
        return {

            copy: [
                { id2: 'icon-cut', title2: 'content_cut' },
                { id2: 'icon-copy', title2: 'content_copy' },
                { id2: 'icon-paste', title2: 'content_paste' }
            ],
            copyData: []

        }
    },
    props:
    {
        rangeStore: Object,
        rangeStorage: Object,
        sheetDB: Object,
        addressBar:String
    },
    methods: {

        copycutpaste(id2, event) {
           
             
            if (this.rangeStorage.length < 2) return;
            let [strow, stcol, endrow, endcol] = [this.rangeStorage[0][0], this.rangeStorage[0][1], this.rangeStorage[1][0], this.rangeStorage[1][1]];
            if (id2 == 'icon-copy') {
                for (let i = strow; i <= endrow; i++) {
                    let copyRow=[];
                    for (let j = stcol; j <= endcol; j++) {
                        let cellProp = this.sheetDB[i][j];
                        copyRow.push(cellProp);
                    }
                    this.copyData.push(copyRow);
                }

                this.$emit('my-event');

            }
            else if (id2 == 'icon-cut') {
                for (let i = strow; i <= endrow; i++) {
                    for (let j = stcol; j <= endcol; j++) {
                        // DB
                        let cellProp = this.sheetDB[i][j];
                        cellProp.value = "";
                        cellProp.bold = false;
                        cellProp.italic = false;
                        cellProp.underline = false;
                        cellProp.fontSize = 14;
                        cellProp.fontFamily = "monospace";
                        cellProp.fontColor = "#000000";
                        cellProp.BGcolor = "#000000";
                        cellProp.alignment = "left";
                        this.sheetDB[i][j] = cellProp 
                        // UI
                        this.$emit("my-second-event",i,j);

                    }
                }
                this.$emit('my-event');
            }
            else {
                let rowDiff = Math.abs(this.rangeStorage[0][0] - this.rangeStorage[1][0]);
                let colDiff = Math.abs(this.rangeStorage[0][1] - this.rangeStorage[1][1]);

                // Target
                let [stRow, stCol] = this.decodeRIDCIDFromAddress(this.addressBar);


                // r -> refers copydata row
                // c -> refers copydata col
                for (let i = stRow, r = 0; i <= stRow + rowDiff; i++, r++) {
                    for (let j = stCol, c = 0; j <= stCol + colDiff; j++, c++) {
                     

                        // DB
                        let data = this.copyData[r][c];
                        let cellProp = this.sheetDB[i][j];

                        cellProp.value = data.value;
                        cellProp.bold = data.bold;
                        cellProp.italic = data.italic;
                        cellProp.underline = data.underline;
                        cellProp.fontSize = data.fontSize;
                        cellProp.fontFamily = data.fontFamily;
                        cellProp.fontColor = data.fontColor;
                        cellProp.BGcolor = data.BGcolor;
                        cellProp.alignment = data.alignment;
                        this.sheetDB[i][j]=cellProp;
                        // UI
                        this.$emit("my-second-event",i,j);
                    }
                }
            }
        }
    }
}
</script>
<style >

</style>