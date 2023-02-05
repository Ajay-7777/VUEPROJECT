<template>
    <div id="app">
        <div class="container">
            <Home />
            <div class="hello menu-icon-bar">
                <Cutcopypaste ref="Cutcopy" :addressBar="addressBarvalue" :rangeStore="rangeStore" :rangeStorage="rangeStorage" :sheetDB="sheetDB" @my-event="defaultSelectedCellsUI"  @my-second-event="getinputCell"/>
                <Iconbar ref="hello" :addressBar="addressBarvalue" :sheetDB="sheetDB"
                :inputcellval="inputcellval" :graphComponenMatrixt="graphComponentMatrix"
                    :collectedGraphComponent="collectedGraphComponent"
                    :collectedSheetDB="collectedSheetDB"  />
            </div>

            <div class="formula-bar">
                <input type="text" readonly class="formula-editor selected-cell addressBar">

                <div class="function-sign">
                    <svg class="ewa-svg-icon" focusable="false" viewBox="0,0,2048,2048"
                        style="height: 13px; width: 13px; margin: 4.5px 8px;">
                        <title>Insert Function</title>
                        <path type="path" class="OfficeIconColors_HighContrast"
                            d="M 1198 639 h -194 l -126 511 q -62 249 -133 420 q -71 172 -150 278 q -79 106 -164 153 q -85 47 -175 47 q -30 0 -60 -9 q -30 -9 -54 -26 q -24 -17 -39 -42 q -15 -25 -15 -57 q 0 -22 10 -43 q 9 -20 26 -35 q 16 -15 38 -24 q 22 -9 46 -9 q 19 0 36 7 q 17 7 30 19 q 13 12 21 27 q 7 16 7 33 q 0 36 -30 63 q 33 0 66 -14 q 33 -13 64 -44 q 31 -31 59 -81 q 28 -50 51 -123 q 1 -8 6 -26 q 5 -18 15 -52 q 10 -34 25 -87 q 14 -53 34 -131 l 191 -755 h -217 l 26 -122 h 53 q 53 0 79 -4 q 26 -3 37 -7 q 7 -3 21 -9 q 13 -6 30 -18 q 16 -12 34 -32 q 17 -19 32 -49 q 33 -65 62 -114 q 29 -48 59 -84 q 86 -103 180 -152 q 93 -48 176 -48 q 45 0 82 14 q 37 14 64 36 q 26 22 41 50 q 14 28 14 56 q 0 24 -8 45 q -9 21 -24 36 q -15 16 -36 25 q -21 9 -46 9 q -44 0 -72 -27 q -29 -26 -29 -64 q 0 -12 5 -23 q 4 -11 9 -21 q 5 -9 10 -18 q 4 -9 4 -16 q -7 -5 -24 -5 q -70 0 -126 54 q -56 54 -101 151 q -6 13 -13 27 q -7 14 -16 37 q -10 23 -22 59 q -13 36 -30 92 h 195 m 488 514 q -49 40 -119 160 q 19 80 33 136 q 13 57 23 96 q 9 40 15 64 q 6 25 11 39 q 4 15 8 22 q 3 7 7 11 q 7 0 20 -11 q 13 -10 29 -29 q 15 -18 32 -43 q 17 -24 32 -51 l 76 39 q -26 50 -59 94 q -33 45 -68 79 q -35 34 -68 54 q -34 20 -61 20 q -22 0 -50 -13 q -28 -13 -51 -56 q -3 -5 -7 -17 q -4 -12 -11 -39 q -8 -26 -19 -70 q -11 -43 -27 -111 q -54 89 -97 148 q -43 59 -79 94 q -37 35 -69 49 q -33 15 -65 15 q -20 0 -39 -7 q -20 -7 -36 -20 q -17 -13 -27 -32 q -10 -19 -10 -44 q 0 -38 26 -66 q 26 -27 64 -27 q 17 0 30 5 q 12 6 23 13 q 11 8 22 16 q 10 9 23 14 q 30 -25 60 -62 q 29 -37 56 -78 q 27 -40 50 -81 q 22 -40 38 -72 q -18 -70 -28 -112 q -11 -41 -17 -64 q -6 -22 -8 -30 q -3 -7 -3 -8 q -9 -25 -19 -42 q -10 -17 -24 -27 q -14 -10 -34 -14 q -20 -4 -50 -4 q -9 0 -23 0 q -14 1 -46 3 v -80 l 269 -47 q 25 27 42 46 q 16 20 28 42 q 12 22 23 53 q 10 31 24 82 l 46 -69 q 22 -34 51 -62 q 29 -28 59 -48 q 29 -20 58 -32 q 28 -11 49 -11 q 47 0 79 27 q 31 27 31 68 q 0 27 -8 44 q -9 18 -23 29 q -14 11 -31 15 q -17 5 -33 5 q -13 0 -25 -4 q -12 -3 -23 -7 q -12 -4 -23 -8 q -12 -3 -24 -3 q -2 0 -10 3 q -8 3 -23 16 z">
                        </path>
                        <path type="path" class="OfficeIconColors_m22"
                            d="M 1198 639 h -194 l -126 511 q -62 249 -133 420 q -71 172 -150 278 q -79 106 -164 153 q -85 47 -175 47 q -30 0 -60 -9 q -30 -9 -54 -26 q -24 -17 -39 -42 q -15 -25 -15 -57 q 0 -22 10 -43 q 9 -20 26 -35 q 16 -15 38 -24 q 22 -9 46 -9 q 19 0 36 7 q 17 7 30 19 q 13 12 21 27 q 7 16 7 33 q 0 36 -30 63 q 33 0 66 -14 q 33 -13 64 -44 q 31 -31 59 -81 q 28 -50 51 -123 q 1 -8 6 -26 q 5 -18 15 -52 q 10 -34 25 -87 q 14 -53 34 -131 l 191 -755 h -217 l 26 -122 h 53 q 53 0 79 -4 q 26 -3 37 -7 q 7 -3 21 -9 q 13 -6 30 -18 q 16 -12 34 -32 q 17 -19 32 -49 q 33 -65 62 -114 q 29 -48 59 -84 q 86 -103 180 -152 q 93 -48 176 -48 q 45 0 82 14 q 37 14 64 36 q 26 22 41 50 q 14 28 14 56 q 0 24 -8 45 q -9 21 -24 36 q -15 16 -36 25 q -21 9 -46 9 q -44 0 -72 -27 q -29 -26 -29 -64 q 0 -12 5 -23 q 4 -11 9 -21 q 5 -9 10 -18 q 4 -9 4 -16 q -7 -5 -24 -5 q -70 0 -126 54 q -56 54 -101 151 q -6 13 -13 27 q -7 14 -16 37 q -10 23 -22 59 q -13 36 -30 92 h 195 m 488 514 q -49 40 -119 160 q 19 80 33 136 q 13 57 23 96 q 9 40 15 64 q 6 25 11 39 q 4 15 8 22 q 3 7 7 11 q 7 0 20 -11 q 13 -10 29 -29 q 15 -18 32 -43 q 17 -24 32 -51 l 76 39 q -26 50 -59 94 q -33 45 -68 79 q -35 34 -68 54 q -34 20 -61 20 q -22 0 -50 -13 q -28 -13 -51 -56 q -3 -5 -7 -17 q -4 -12 -11 -39 q -8 -26 -19 -70 q -11 -43 -27 -111 q -54 89 -97 148 q -43 59 -79 94 q -37 35 -69 49 q -33 15 -65 15 q -20 0 -39 -7 q -20 -7 -36 -20 q -17 -13 -27 -32 q -10 -19 -10 -44 q 0 -38 26 -66 q 26 -27 64 -27 q 17 0 30 5 q 12 6 23 13 q 11 8 22 16 q 10 9 23 14 q 30 -25 60 -62 q 29 -37 56 -78 q 27 -40 50 -81 q 22 -40 38 -72 q -18 -70 -28 -112 q -11 -41 -17 -64 q -6 -22 -8 -30 q -3 -7 -3 -8 q -9 -25 -19 -42 q -10 -17 -24 -27 q -14 -10 -34 -14 q -20 -4 -50 -4 q -9 0 -23 0 q -14 1 -46 3 v -80 l 269 -47 q 25 27 42 46 q 16 20 28 42 q 12 22 23 53 q 10 31 24 82 l 46 -69 q 22 -34 51 -62 q 29 -28 59 -48 q 29 -20 58 -32 q 28 -11 49 -11 q 47 0 79 27 q 31 27 31 68 q 0 27 -8 44 q -9 18 -23 29 q -14 11 -31 15 q -17 5 -33 5 q -13 0 -25 -4 q -12 -3 -23 -7 q -12 -4 -23 -8 q -12 -3 -24 -3 q -2 0 -10 3 q -8 3 -23 16 z">
                        </path>
                    </svg>
                </div>
                <input type="text" value="" class="formula-editor formula-input " @keydown="formulaevaluation">
            </div>

            <div class="data-container">
                <div class="select-all "></div>


                <!-- <div v-for="rdata in rdeta" v-html="rdeta"></div> -->

                <div class="column-name-container">
                    <!-- <div v-for="cdata in cdeta" v-html="cdata"></div> -->
                </div>
                <div class="row-name-container">
                    <!-- <div v-for="rdata in rdeta" v-html="rdata"></div> -->
                </div>

                <div class="input-cell-container">

                </div>
            </div>
          <Sheethandling   ref="sheetbtn"  @my-second-event="getinputCell" @getsheet="getsheet" :collectedSheetDB="collectedSheetDB" :collectedGraphComponent="collectedGraphComponent" :sheetDB="sheetDB"  :graphComponentMatrix="graphComponentMatrix"/>
            <!-- <div class="sheet-options-modal">
            <div class="sheet-rename">Rename</div>
            <div class="sheet-delete">Delete</div>
        </div> -->
            <!-- <div class="sheet-rename-modal">
            <h4 class="modal-title">Rename Sheet To:</h4>
            <input type="text" class="new-sheet-name" placeholder="Sheet Name"/>
            <div class="action-button">
                <div class="submit-button">Rename</div>
                <div class="cancel-button">Cancel</div>
            </div>
        </div> -->
        </div>
    </div>
</template>


<script>

import Home from './components/Home'
import Iconbar from './components/Iconbar'
import Cutcopypaste from './components/Cutcopypaste'
import Sheethandling from './components/Sheethandling.vue'
import getCell from './mixins/getCell'

import axios from 'axios';

// const $ = require('jquery');

// window.$ = $;



export default {
    name: 'App',

    components: {
        Home,
        Iconbar,
        Cutcopypaste,
        Sheethandling

    },
    mixins: [getCell],

    data() {
        return {
            rangeStore: [],
            rangeStorage: [],
            addressBarvalue: '',
            cellData: [],
            sheetDB: [],
            lastlyAddedSheet: 1,
            cdeta: [],
            rdeta: [],
            cellcontainerdata: [],
            Ascii: new Map(),
            collectedGraphComponent: [],
            graphComponentMatrix: [],
            collectedSheetDB: [],
         
        }
    },
    methods: {
      getsheet(newsheetDB,newgraphComponenMatrixt){
           this.sheetDB=newsheetDB;
           this.graphComponentMatrix=newgraphComponenMatrixt;
          
           for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 26; j++) {
          this.getinputCell(i,j);
        }
    }
    this.getinputCell(0,0);
        //    console.log(this.sheetDB);
      },

    getinputCell(i,j){
let cell=  document.querySelector(`.input-cell[rid="${i}"][cid="${j}"]`);
 cell.click();
    },
        functionforrowcolname: function () {

            let col = document.querySelector(".column-name-container");
            let row = document.querySelector(".row-name-container");
            let cellCont = document.querySelector(".input-cell-container");
            for (let i = 0; i < 100; i++) {
                let p = document.createElement("div")
                p.setAttribute("class", "row-name")
                p.innerText = i + 1;
                row.appendChild(p);
            }
            //create col

            for (let i = 0; i < 26; i++) {
                let p = document.createElement("div")
                p.setAttribute("class", "column-name")
                p.innerText = String.fromCharCode(65 + i);
                col.appendChild(p);
            }
        },
        addrowcol: function () {
            for (let i = 0; i < 100; i++) {
                let row = document.createElement("div");
                row.setAttribute("class", "cell-row");
                for (let j = 0; j < 100; j++) {
                    let cell = document.createElement("div");
                    cell.setAttribute("class", "input-cell");
                    cell.setAttribute("contenteditable", "true");
                    cell.setAttribute("rid", i);
                    cell.setAttribute("cid", j);
                    row.appendChild(cell);
                    this.addListenerForAddressBarDisplay(cell, i, j);
                }
                document.querySelector(".input-cell-container").appendChild(row);
            }
        },
        addListenerForAddressBarDisplay: function (cell, i, j) {
            cell.addEventListener("click", () => {
                let rowId = i + 1;
                let colId = String.fromCharCode(65 + j);
                let adressBar = document.querySelector(".selected-cell")
                adressBar.value = `${colId}${rowId}`
                this.addressBarvalue = adressBar.value;

            })
        },
        defaultSelectedCellsUI() {
            for (let i = 0; i < this.rangeStorage.length; i++) {
                let cell = document.querySelector(`.input-cell[rid="${this.rangeStorage[i][0]}"][cid="${this.rangeStorage[i][1]}"]`);
                
                cell.style.border = "1px solid lightgrey";
            }
        },
        handleSelectedCells(cell) {
   
        // Select cells range work
        // UI
        cell.style.border = "3px solid #218c74";
        let rid = Number(cell.getAttribute("rid"));
        let cid = Number(cell.getAttribute("cid"));
        this.rangeStorage.push([rid, cid]);
        
}
,
        addListenerToAttachCellProperties: function (cell) {
            // Work
            let ctrlKey;
            document.addEventListener("keydown", (e) => {
                ctrlKey = e.ctrlKey;
            })
            document.addEventListener("keyup", (e) => {
                ctrlKey = e.ctrlKey;
            })
            cell.addEventListener("click", (e) => {
                if (ctrlKey) {
                    if (this.rangeStorage.length >= 2) {
                        this.defaultSelectedCellsUI();
                        this.rangeStorage = [];
                    }
                    this.handleSelectedCells(cell);
                }
                console.log("clicked")
                let address = this.addressBarvalue;
                let [rid, cid] = this.decodeRIDCIDFromAddress(address);
                let cellProp = this.sheetDB[rid][cid];

                // Apply cell Properties 
                cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
                cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
                cell.style.textDecoration = cellProp.underline ? "underline" : "none";
                cell.style.fontSize = cellProp.fontSize + "px";
                cell.style.fontFamily = cellProp.fontFamily;
                cell.style.color = cellProp.fontColor;
                cell.style.backgroundColor = cellProp.BGcolor === "#000000" ? "transparent" : cellProp.BGcolor;
                cell.style.textAlign = cellProp.alignment;


                // Apply properties UI Props container
                this.$refs.hello.greetUser(cellProp);

                let formulaBar = document.querySelector(".formula-bar");
                formulaBar.value = cellProp.formula;
                cell.innerText = cellProp.value;
            })


        },
        addChildToGraphComponent(formula, childAddress) {
            let [crid, ccid] = this.decodeRIDCIDFromAddress(childAddress);
            let encodedFormula = formula.split(" ");
            for (let i = 0; i < encodedFormula.length; i++) {
                let asciiValue = encodedFormula[i].charCodeAt(0);
                if (asciiValue >= 65 && asciiValue <= 90) {
                    let [prid, pcid] = this.decodeRIDCIDFromAddress(encodedFormula[i]);
                    // B1: A1 + 10
                    // rid -> i, cid -> j
                    this.graphComponentMatrix[prid][pcid].push([crid, ccid]);
                }
            }
        },

        removeChildFromGraphComponent(formula, childAddress) {
            let [crid, ccid] = this.decodeRIDCIDFromAddress(childAddress);
            let encodedFormula = formula.split(" ");

            for (let i = 0; i < encodedFormula.length; i++) {
                let asciiValue = encodedFormula[i].charCodeAt(0);
                if (asciiValue >= 65 && asciiValue <= 90) {
                    let [prid, pcid] = this.decodeRIDCIDFromAddress(encodedFormula[i]);
                    this.graphComponentMatrix[prid][pcid].pop();
                }
            }
        },
        removeChildFromParent(formula) {
            let childAddress = this.addressBarvalue;
            let encodedFormula = formula.split(" ");
            for (let i = 0; i < encodedFormula.length; i++) {
                let asciiValue = encodedFormula[i].charCodeAt(0);
                if (asciiValue >= 65 && asciiValue <= 90) {
                    let [parentCell, parentCellProp] = this.getCellAndCellProp(encodedFormula[i]);
                    let idx = parentCellProp.children.indexOf(childAddress);
                    parentCellProp.children.splice(idx, 1);
                }
            }
        }
        ,

        updateChildrenCells(parentAddress) {
            let [parentCell, parentCellProp] = this.getCellAndCellProp(parentAddress);
            let children = parentCellProp.children;
            for (let i = 0; i < children.length; i++) {
                let childAddress = children[i];
                let [childCell, childCellProp] = this.getCellAndCellProp(childAddress);
                let childFormula = childCellProp.formula;
                let evaluatedValue = this.evaluateFormula(childFormula);
                this.setCellUIAndCellProp(evaluatedValue, childFormula, childAddress);
                this.updateChildrenCells(childAddress);
            }

        },
        evaluateFormula(formula) {
            let encodedFormula = formula.split(" ");
            for (let i = 0; i < encodedFormula.length; i++) {
                let asciiValue = encodedFormula[i].charCodeAt(0);
                if (asciiValue >= 65 && asciiValue <= 90) {
                    let [cell, cellProp] = this.getCellAndCellProp(encodedFormula[i]);
                    encodedFormula[i] = cellProp.value;
                }
            }
            let decodedFormula = encodedFormula.join(" ");
            return eval(decodedFormula);
        }
        ,
        setCellUIAndCellProp(evaluatedValue, formula, address) {
            let [cell, cellProp] = this.getCellAndCellProp(address);
            //UI update
            cell.innerText = evaluatedValue;
            // DB update
            cellProp.value = evaluatedValue;
            cellProp.formula = formula;
            let [rid, cid] = this.decodeRIDCIDFromAddress(address)
            this.sheetDB[rid][cid] = cellProp;
        },

        addChildToParent(formula) {
            let childAddress = this.addressBarvalue;
            let encodedFormula = formula.split(" ");
            for (let i = 0; i < encodedFormula.length; i++) {
                let asciiValue = encodedFormula[i].charCodeAt(0);
                if (asciiValue >= 65 && asciiValue <= 90) {
                    let [parentCell, parentCellProp] = this.getCellAndCellProp(encodedFormula[i]);
                    parentCellProp.children.push(childAddress);
                }
            }
        },
        formulaevaluation(event) {
            let formulaBar = document.querySelector(".formula-input");
            if (event.key === "Enter" && formulaBar.value) {
                let inputFormula = formulaBar.value;
                // If change in formula, break old P-C relation, evaluate new formula, add new P-C relation
                let address = this.addressBarvalue;
                let [cell, cellProp] = this.getCellAndCellProp(address);
                if (inputFormula !== cellProp.formula) this.removeChildFromParent(cellProp.formula);

                this.addChildToGraphComponent(inputFormula, address);
                // Check formula is cyclic or not, then only evaluate
                // True -> cycle, False -> Not cyclic
                //  console.log(graphComponentMatrix);

                let cycleResponse = this.isGraphCylic(JSON.parse(JSON.stringify(this.graphComponentMatrix)));
                if (cycleResponse) {
                    // alert("Your formula is cyclic");
                    let response = confirm("Your formula is cyclic. Do you want to trace your path?");
                    while (response === true) {
                        // Keep on tracking color until user is sartisfied
                        isGraphCylicTracePath(this.graphComponentMatrix, cycleResponse); // I want to complete full  iteration of color tracking, so I will attach wait here also
                        response = confirm("Your formula is cyclic. Do you want to trace your path?");
                    }

                    this.removeChildFromGraphComponent(inputFormula, address);
                    return;
                }

                let evaluatedValue = this.evaluateFormula(inputFormula);

                // To update UI and cellProp in DB
                this.setCellUIAndCellProp(evaluatedValue, inputFormula, address);
                this.addChildToParent(inputFormula);

                this.updateChildrenCells(address);
            }
        }

    },

    mounted() {
        this.$refs.sheetbtn.addsheetBTN();
    
        
        // for (let i = 0; i < 100; i++) {
        //     let sheetRow = [];
        //     for (let j = 0; j < 26; j++) {
        //         let cellProp = {
        //             bold: false,
        //             italic: false,
        //             underline: false,
        //             alignment: "left",
        //             fontFamily: "Noto Sans",
        //             fontSize: "14",
        //             fontColor: "#000000",
        //             BGcolor: "#000000",  // Just for indication purpose,
        //             value: "",
        //             formula: "",
        //             children: [],
        //         }
        //         sheetRow.push(cellProp);
        //     }
        //     this.sheetDB.push(sheetRow);
        // }

        // for (let i = 0; i < 100; i++) {
        //     let row = [];
        //     for (let j = 0; j < 26; j++) {
        //         // Why array -> More than 1 child relation(dependency)
        //         row.push([]);
        //     }
        //     this.graphComponentMatrix.push(row);
        // }



        // this.celldataobj=cellData;

        // console.log(defaultProperties);




        // $(".savedb").click(function () {
        //     // console.log(cellData)
        //     // console.log("data",cellData)
        //     axios.post("http://localhost:3080/data", cellData).then((response) => {
        //         console.log("response", response);
        //     })
        // });
        // // console.log(cellData)
        // $(".opendb").click(function () {
        //     // let p = prompt("Please Enter  Sheet Name");
        //     axios.get('http://localhost:3080/data').then((response) => {
        //         cellData[selectedSheet] = response.data[0].cellData["Sheet1"];
        //         // console.log(response,cellData[selectedSheet],selectedSheet)
        //         loadSheet();
        //     });
        // celldata=response;


        // });

        // console.log(selectedSheet)

        // let totalSheets = 1;


        this.functionforrowcolname();
        this.addrowcol();
        let allCells = document.querySelectorAll(".input-cell");

        for (let i = 0; i < allCells.length - 9000; i++) {
            this.addListenerToAttachCellProperties(allCells[i]);
        }


        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 26; j++) {
                let cell = document.querySelector(`.input-cell[rid="${i}"][cid="${j}"]`);
                cell.addEventListener("blur", (e) => {
                    let address = this.addressBarvalue;
                    let [activeCell, cellProp] = this.getCellAndCellProp(address);
                    let [rid, cid] = this.decodeRIDCIDFromAddress(address);
                    let enteredData = activeCell.innerText;
                    console.log(activeCell.innerText)
                    if (enteredData === cellProp.value) return;

                    cellProp.value = enteredData;
                    this.sheetDB[rid][cid] = cellProp;
                    // If data modifies remove P-C relation, formula empty, update children with new hardcoded (modified) value
                    this.removeChildFromParent(cellProp.formula);
                    cellProp.formula = "";
                    this.updateChildrenCells(address);
                })
            }
        }

        
        // let formulaBar = document.querySelector(".formula-input");
        // formulaBar.addEventListener("keydown", async (e) => {

        //     let inputFormula = formulaBar.value;

        //     if (e.key === "Enter" && inputFormula) {
        //         console.log(inputFormula)
        //         // If change in formula, break old P-C relation, evaluate new formula, add new P-C relation
        //         let address = this.addressBarvalue;
        //         let [cell, cellProp] = this.getCellAndCellProp(address);
        //         if (inputFormula !== cellProp.formula) this.removeChildFromParent(cellProp.formula);

        //         this.addChildToGraphComponent(inputFormula, address);
        //         // Check formula is cyclic or not, then only evaluate
        //         // True -> cycle, False -> Not cyclic
        //         //  console.log(graphComponentMatrix);

        //         let cycleResponse = this.isGraphCylic(JSON.parse(JSON.stringify(this.graphComponentMatrix)));
        //         if (cycleResponse) {
        //             // alert("Your formula is cyclic");
        //             let response = confirm("Your formula is cyclic. Do you want to trace your path?");
        //             while (response === true) {
        //                 // Keep on tracking color until user is sartisfied
        //                 await isGraphCylicTracePath(this.graphComponentMatrix, cycleResponse); // I want to complete full  iteration of color tracking, so I will attach wait here also
        //                 response = confirm("Your formula is cyclic. Do you want to trace your path?");
        //             }

        //             this.removeChildFromGraphComponent(inputFormula, address);
        //             return;
        //         }

        //         let evaluatedValue = this.evaluateFormula(inputFormula);

        //         // To update UI and cellProp in DB
        //         this.setCellUIAndCellProp(evaluatedValue, inputFormula, address);
        //         this.addChildToParent(inputFormula);

        //         this.updateChildrenCells(address);
        //     }
        // })



        // for(let i=1;i<=100;i++){
        // let ans="";
        // let n=i;
        // while(n>0){
        // let rem = n % 26;
        // if(rem==0){
        //     ans="Z"+ans;
        //     n=Math.floor(n / 26)-1;

        // }else{
        //   ans=String.fromCharCode(rem - 1 + 65) + ans;
        //   n=Math.floor(n / 26);
        // }
        // }
        // Ascii.set(ans,i);
        // Ascii.set(i,ans);

        // let vari =`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`;
        // this.cdeta[i]=vari;
        // this.rdeta[i]=`<div class="row-name" id="rowId-${i}">${i}</div>`;
        // // let column=$(`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`);
        // // $(".column-name-container").append($(column));
        // // let row=$(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        // // $(".row-name-container").append($(row));
        //  }
        //  for(let  i = 1;i<=100; i++){
        //     let row = $(`<div class="cell-row"></div>`);
        //     for(let j = 1; j <= 100; j++){
        //         let colCode = $(`.colId-${j}`).attr("id").split("-")[1];
        //         let column =  $(` <div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data="code-${colCode}"></div>`);
        //         row.append(column);
        //     }
        //     // $(".input-cell-container").append(row);
        //     this.cellcontainerdata[i]=row;
        // }
        // console.log(this.cellcontainerdata)


        // for (let i = 1; i <= 100; i++) {
        //     // let row = '<div class="cell-row"></div>";
        //     let row = document.createElement("div");
        //     row.setAttribute("id", "cell-row");
        //     for (let j = 1; j <= 100; j++) {
        //         let colCode = this.Ascii.get(j);
        //         // let colCode = $(`.colId-+${j}`).attr("id").split("-")[1];
        //         let column = $(`<div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data="code-${colCode}"></div>`);
        //         row.append(column);
        //     }
        //     this.cellcontainerdata[i] = row;
        // }
        //     $(document).ready(function () {

        //         // for(let i=1;i<=100;i++){
        //         // let ans="";
        //         // let n=i;
        //         // while(n>0){
        //         // let rem = n % 26;
        //         // if(rem==0){
        //         //     ans="Z"+ans;
        //         //     n=Math.floor(n / 26)-1;

        //         // }else{
        //         //   ans=String.fromCharCode(rem - 1 + 65) + ans;
        //         //   n=Math.floor(n / 26);
        //         // }
        //         // }
        //         // Ascii.set(ans,i);
        //         // Ascii.set(i,ans);
        //         // console.log(this.cdeta)
        //         // let column=$(`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`);
        //         // $(".column-name-container").append($(column));
        //         // let row=$(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        //         // $(".row-name-container").append($(row));
        //         //  }
        //         // for(let  i = 1;i<=100; i++){
        //         //     let row = $(`<div class="cell-row"></div>`);
        //         //     for(let j = 1; j <= 100; j++){
        //         //         let valo="colId-"+j;
        //         //         let colCode = $(`.${valo}`).attr("id").split("-")[1];
        //         //         let column =  $(` <div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data="code-${colCode}"></div>`);
        //         //         row.append(column);
        //         //     }
        //         //     $(".input-cell-container").append(row);
        //         // }

        //         //remove seleted class and apply on other
        //         // $(".align-icon").click(function () {
        //         //     console.log(" you have clicked ");
        //         //     $(".align-icon.selected").removeClass("selected");
        //         //     $(this).addClass("selected");
        //         // });
        //         // $(".style-icon").click(function () {
        //         //     //toggle class is  like agar selected class hain to hta do vrna lgA DO
        //         //     console.log("you have clicked style icon");
        //         //     $(this).toggleClass("selected");

        //         // });

        //         //onclick

        //         $(".input-cell").click(function (e) {
        //             // console.log("you have clicked on input cell")
        //             if (e.ctrlKey) {
        //                 //event ko pass kar diya this will have col and row id 
        //                 let [rowId, colId] = getRowCol(this);
        //                 if (rowId > 1) {
        //                     let topcellSelected = $(`#row-${rowId - 1}-col-${colId}`).hasClass("selected");
        //                     if (topcellSelected) {

        //                         $(this).addClass("top-cell-selected");
        //                         $(`#row-${rowId - 1}-col-${colId}`).addClass("bottom-cell-selected");
        //                     }

        //                 }
        //                 if (rowId < 100) {
        //                     let botttomcellSelected = $(`#row-${rowId + 1}-col-${colId}`).hasClass("selected");

        //                     if (botttomcellSelected) {
        //                         $(this).addClass("bottom-cell-selected");
        //                         $(`#row-${rowId + 1}-col-${colId}`).addClass("top-cell-selected");
        //                     }
        //                 }
        //                 if (colId < 100) {

        //                     let rightcellSelected = $(`#row-${rowId}-col-${colId + 1}`).hasClass("selected");

        //                     if (rightcellSelected) {

        //                         $(this).addClass("right-cell-selected");
        //                         $(`#row-${rowId}-col-${colId + 1}`).addClass("left-cell-selected");
        //                     }

        //                 }
        //                 if (colId > 1) {
        //                     let leftcellSelected = $(`#row-${rowId}-col-${colId - 1}`).hasClass("selected");

        //                     if (leftcellSelected) {
        //                         $(this).addClass("left-cell-selected");
        //                         $(`#row-${rowId}-col-${colId - 1}`).addClass("right-cell-selected");
        //                     }

        //                 }




        //             }
        //             else {
        //                 //already selected hai to remove selected
        //                 $(".input-cell.selected").removeClass("selected");
        //                 //for already selected input cells 
        //                 $(".input-cell.right-cell-selected").removeClass("right-cell-selected");
        //                 $(".input-cell.left-cell-selected").removeClass("left-cell-selected");
        //                 $(".input-cell.top-cell-selected").removeClass("top-cell-selected");
        //                 $(".input-cell.bottom-cell-selected").removeClass("bottom-cell-selected");

        //             }

        //             $(this).addClass("selected");
        //             let [rowId, colId] = getRowCol(this);
        //             let formula = document.querySelector(".formula-input");
        //             //FORMULABAR UPDATE ON CLICK
        //             formula.value = "";
        //             if (cellData[selectedSheet][rowId][colId][formula] !== undefined) {
        //                 formula.value = cellData[selectedSheet][rowId][colId].formula;
        //             }
        //             let colCode = $(`.colId-${colId}`).attr("id").split("-")[1];
        //             $(".formula-editor.selected-cell").text(colCode + rowId);

        //             // 2way merging function for seleted parts for a given cell
        //             changeHeader(this);
        //         });
        //         function changeHeader(ele) {
        //             // console.log("you are in changeheader ");
        //             let [rowId, colId] = getRowCol(ele);
        //             let cellInfo = defaultProperties;
        //             // console.log(cellData[selectedSheet]);
        //             if (cellData[selectedSheet][rowId] && cellData[selectedSheet][rowId][colId]) {
        //                 cellInfo = cellData[selectedSheet][rowId][colId];
        //             }
        //             cellInfo["font-weight"] ? $(".icon-bold").addClass("selected") : $(".icon-bold").removeClass("selected");
        //             cellInfo["font-style"] ? $(".icon-italic").addClass("selected") : $(".icon-italic").removeClass("selected");
        //             cellInfo["text-decoration"] ? $(".icon-underline").addClass("selected") : $(".icon-underline").removeClass("selected");
        //             let alignment = cellInfo["text-align"];
        //             $(".align-icon.selected").removeClass("selected");
        //             $(".icon-align-" + alignment).addClass("selected");
        //             $(".background-color-picker").val(cellInfo["background-color"]);
        //             $(".text-color-picker").val(cellInfo["color"]);
        //             $(".font-family-selector").val(cellInfo["font-family"]);
        //             $(".font-family-selector").css("font-family", cellInfo["font-family"]);
        //             $(".font-size-selector").val(cellInfo["font-size"]);
        //             // console.log(cellInfo["font-size"]);
        //             // console.log("you are anout to end  cheange heaader");
        //         }



        //         $(".input-cell").dblclick(function () {
        //             $(".input-cell.selected").removeClass("selected");
        //             $(this).addClass("selected");
        //             $(this).attr("contenteditable", "true");
        //             $(this).focus();
        //         })

        //         $(".input-cell").blur(function () {
        //             // console.log("blur event run ho gya");
        //             $(".input-cell.selected").attr("contenteditable", "false");
        //             // console.log($(this).text());
        //             let [rowId, colId] = getRowCol(this);

        //             let enteredData = $(".input-cell.selected").text();
        //             if (enteredData === cellData[selectedSheet][rowId][colId].text) return;
        //             //Update the text 
        //             updateCell("text", $(".input-cell.selected").text(), false);
        //             cellData[selectedSheet][rowId][colId].text = enteredData;
        //             //remove parent child relation
        //             removechildToParent(cellData[selectedSheet][rowId][colId].formula);
        //             //remove formula 
        //             cellData[selectedSheet][rowId][colId].formula = "";
        //             //update child cells value
        //             updatechildtoParent(rowId, colId);
        //         })

        //         $(".input-cell-container").scroll(function () {
        //             $(".column-name-container").scrollLeft(this.scrollLeft);
        //             $(".row-name-container").scrollTop(this.scrollTop);
        //         })
        //     });

        //     function getRowCol(ele) {

        //         // console.log(ele)
        //         let idArray = $(ele).attr("id").split("-");
        //         //parse int for making string to int
        //         let rowId = parseInt(idArray[1]);
        //         let colId = parseInt(idArray[3]);
        //         return [rowId, colId];
        //     }
        //     //updating value of bold
        //     function updateCell(property, value, defaultPossible) {
        //         // console.log("you are in update cell ");
        //         $(".input-cell.selected").each(function () {
        //             $(this).css(property, value);

        //             let [rowId, colId] = getRowCol(this);

        //             if (cellData[selectedSheet][rowId]) {
        //                 if (cellData[selectedSheet][rowId][colId]) {
        //                     //colId exit karti hain update it
        //                     cellData[selectedSheet][rowId][colId][property] = value;
        //                 } else {
        //                     cellData[selectedSheet][rowId][colId] = { ...defaultProperties };
        //                     cellData[selectedSheet][rowId][colId][property] = value;
        //                 }
        //             } else {

        //                 //row he exit nahi karti create new row then col
        //                 cellData[selectedSheet][rowId] = {};
        //                 cellData[selectedSheet][rowId][colId] = { ...defaultProperties };
        //                 cellData[selectedSheet][rowId][colId][property] = value;
        //             }
        //             //if cell1=default propeties then delete it because there is no change
        //             if (defaultPossible && (JSON.stringify(cellData[selectedSheet][rowId][colId]) === JSON.stringify(defaultProperties))) {
        //                 delete cellData[selectedSheet][rowId][colId];
        //                 //if row khali hain then delete it
        //                 if (Object.keys(cellData[selectedSheet][rowId]).length == 0) {
        //                     delete cellData[selectedSheet][rowId];
        //                 }
        //             }

        //         })
        //         // console.log(cellData);
        //         // console.log("you are anout to end updatecell");
        //     }
        //     $(".icon-bold").click(function () {
        //         if ($(this).hasClass("selected")) {
        //             updateCell("font-weight", "", true);
        //         } else {
        //             updateCell("font-weight", "bold", false);
        //         }
        //     });
        //     $(".icon-italic").click(function () {
        //         if ($(this).hasClass("selected")) {
        //             updateCell("font-style", "", true);
        //         } else {
        //             updateCell("font-style", "italic", false);
        //         }
        //     });

        //     $(".icon-underline").click(function () {
        //         if ($(this).hasClass("selected")) {
        //             updateCell("text-decoration", "", true);
        //         } else {
        //             updateCell("text-decoration", "underline", false);
        //         }
        //     });
        //     $(".icon-align-left").click(function () {
        //         if (!$(this).hasClass("selected")) {
        //             updateCell("text-align", "left", true);
        //         }
        //     });
        //     $(".icon-align-center").click(function () {
        //         if (!$(this).hasClass("selected")) {
        //             updateCell("text-align", "center", true);
        //         }
        //     });
        //     $(".icon-align-right").click(function () {
        //         if (!$(this).hasClass("selected")) {
        //             updateCell("text-align", "right", true);
        //         }
        //     });
        //     //if click on color bulty it wiil click on color-picker
        //     $(".color-fill-icon").click(function () {
        //         $(".background-color-picker").click();
        //     });
        //     $(".color-fill-text").click(function () {
        //         $(".text-color-picker").click();
        //     });

        //     $(".background-color-picker").change(function () {
        //         updateCell("background-color", $(this).val());
        //     })
        //     $(".text-color-picker").change(function () {
        //         updateCell("color", $(this).val());
        //     });
        //     $(".font-family-selector").change(function () {
        //         console.log(this);
        //         updateCell("font-family", $(this).val());
        //         $(".font-family-selector").css("font-family", $(this).val());
        //     });
        //     $(".font-size-selector").change(function () {
        //         updateCell("font-size", $(this).val());

        //     });
        //     //empty the sheet
        //     // let temp;
        //     function emptySheet() {

        //         let sheetInfo = cellData[selectedSheet];
        //         for (let i of Object.keys(sheetInfo)) {
        //             for (let j of Object.keys(sheetInfo[i])) {
        //                 // temp=  $(`#row-${i}-col-${j}`).text();
        //                 $(`#row-${i}-col-${j}`).text("");
        //                 $(`#row-${i}-col-${j}`).css("text-align", "left");
        //                 $(`#row-${i}-col-${j}`).css("font-weight", "");
        //                 $(`#row-${i}-col-${j}`).css("font-style", "");
        //                 $(`#row-${i}-col-${j}`).css("background-color", "#ffffff");
        //                 $(`#row-${i}-col-${j}`).css("color", "#000000");
        //                 $(`#row-${i}-col-${j}`).css("text-decoration", "");
        //                 $(`#row-${i}-col-${j}`).css("font-family", "Nato Sans");
        //                 $(`#row-${i}-col-${j}`).css("font-size", "14px");
        //             }
        //         }

        //     }

        //     //loading the sheet

        //     function loadSheet() {

        //         let sheetInfo = cellData[selectedSheet];
        //         for (let i of Object.keys(sheetInfo)) {
        //             for (let j of Object.keys(sheetInfo[i])) {
        //                 let cellInfo = cellData[selectedSheet][i][j];
        //                 $(`#row-${i}-col-${j}`).text(cellInfo["text"]);
        //                 $(`#row-${i}-col-${j}`).css("font-weight", cellInfo["font-weight"]);
        //                 $(`#row-${i}-col-${j}`).css("font-style", cellInfo["font-style"]);
        //                 $(`#row-${i}-col-${j}`).css("text-decoration", cellInfo["text-decoration"]);
        //                 $(`#row-${i}-col-${j}`).css("text-align", cellInfo["text-align"]);
        //                 $(`#row-${i}-col-${j}`).css("background-color", cellInfo["background-color"]);
        //                 $(`#row-${i}-col-${j}`).css("color", cellInfo["color"]);
        //                 $(`#row-${i}-col-${j}`).css("font-family", cellInfo["font-family"]);
        //                 $(`#row-${i}-col-${j}`).css("font-size", cellInfo["font-size"]);
        //             }
        //         }

        //     }


        //     let createnewsheet = function () {
        //         //khali kro sheeet ko
        //         emptySheet();
        //         //remove selected class from seleted sheet
        //         $(".sheet-tab.selected").removeClass("selected");
        //         //make new sheet
        //         let sheetName = "Sheet" + (lastlyAddedSheet + 1);
        //         //celldata mein v bnao

        //         cellData[sheetName] = [];

        //         // totalSheets+=1;
        //         lastlyAddedSheet += 1;
        //         selectedSheet = sheetName;
        //         // console.log(selectedSheet,"ko")
        //         for (let i = 1; i <= 100; i++) {
        //             cellData[selectedSheet][i] = {};
        //             for (let j = 1; j <= 100; j++) {
        //                 cellData[selectedSheet][i][j] = { ...defaultProperties };
        //             }
        //         }
        //         $(".sheet_tab_container").append(` <div class="sheet-tab selected">${sheetName}</div>`);
        //         //move karne k liye click event listener onl for created
        //         addSheetEvents();
        //     }



        //     //icon add for clicking

        //     $(".icon-add").click(createnewsheet);
        //     function addSheetEvents() {
        //         $(".sheet-tab").click(function () {
        //             console.log("click ho gya bhai");
        //             if (!$(this).hasClass("selected")) {
        //                 selectSheet(this);
        //             }
        //         })
        //         //right click on selected sheet

        //         $(".sheet-tab.selected").contextmenu(function (e) {
        //             e.preventDefault();
        //             selectSheet(this);
        //             selectedSheet = $(this).text();
        //             if ($(".sheet-options-modal").length == 0) {

        //                 $(".container").append(` <div class="sheet-options-modal">
        // <div class="sheet-rename">Rename</div>
        // <div class="sheet-delete">Delete</div>
        // </div>`);
        //                 $(".sheet-rename").click(function () {
        //                     $(".container").append(
        //                         ` <div class="sheet-rename-modal">
        //         <h4 class="modal-title">Rename Sheet To:</h4>
        //         <input type="text" class="new-sheet-name" placeholder="Sheet Name"/>
        //         <div class="action-button">
        //             <div class="submit-button">Rename</div>
        //             <div class="cancel-button">Cancel</div>
        //         </div>
        //     </div>`
        //                     );
        //                     $(".cancel-button").click(function () {
        //                         $(".sheet-rename-modal").remove();
        //                     });
        //                     $(".submit-button").click(function () {
        //                         let newSheetName = $(".new-sheet-name").val();
        //                         $(".sheet-tab.selected").text(newSheetName);
        //                         //make new cell data for deletion of sheet
        //                         let newcellData = [];
        //                         for (let key in cellData) {
        //                             if (key != selectedSheet) {
        //                                 newcellData[key] = cellData[key];
        //                             } else {
        //                                 newcellData[newSheetName] = cellData[key];
        //                             }
        //                         }
        //                         cellData = newcellData;
        //                         selectedSheet = newSheetName;
        //                         $(".sheet-rename-modal").remove();
        //                     })

        //                 })
        //                 $(".sheet-delete").click(function () {
        //                     if (Object.keys(cellData).length > 1) {
        //                         let currSheetIndex = Object.keys(cellData).indexOf(selectedSheet);
        //                         let prevselected = $(".sheet-tab.selected");
        //                         console.log(currSheetIndex);
        //                         if (currSheetIndex == 0) {
        //                             prevselected.next().click();
        //                             //   selectedSheet=Object.keys(cellData)[currentSheetIndex+1];  
        //                         } else {
        //                             prevselected.prev().click();
        //                             // selectedSheet=Object.keys(cellData)[currentSheetIndex-1];
        //                         }
        //                         prevselected.remove();
        //                         delete cellData[Object.keys(cellData)[currSheetIndex]];

        //                     }

        //                     else {
        //                         alert("Sorry ,there is only one sheet,it's not possible");
        //                     }
        //                 })
        //             }
        //             //pafeX will give x coordinate of window and we will appliy css on it
        //             $(".sheet-options-modal").css("left", e.pageX + "px")
        //         })
        //     }

        //     //container mein click karne pr perventdefault bnd hona chaiye
        //     $(".container").click(function () {
        //         $(".sheet-options-modal").remove();
        //     })

        //     addSheetEvents();
        //     function selectSheet(ele) {
        //         $(".sheet-tab.selected").removeClass("selected");
        //         $(ele).addClass("selected");
        //         emptySheet();
        //         selectedSheet = $(ele).text();
        //         loadSheet();
        //     }

        //     $(".icon-left-scroll").click(function () {
        //         if (Object.keys(cellData).indexOf(selectedSheet) > 0) {
        //             selectSheet($(".sheet-tab.selected").prev().click());
        //         }

        //     })
        //     $(".icon-right-scroll").click(function () {
        //         if (Object.keys(cellData).length - 1 > Object.keys(cellData).indexOf(selectedSheet)) {
        //             selectSheet($(".sheet-tab.selected").next().click());
        //         }

        //     })
        //     let selectedCells = [];
        //     let cut = false;
        //     $(".icon-copy").click(function () {
        //         if (selectedCells.length > 0) {
        //             selectedCells = [];
        //         }
        //         $(".input-cell.selected").each(function () {
        //             selectedCells.push(getRowCol(this));
        //         });
        //         console.log(selectedCells, "print");
        //     })

        //     $(".icon-cut").click(function () {
        //         // console.log("beforecut",selectedCells,selectedCells.length)
        //         // console.log("beforecut",selectedCells)
        //         // selectedCells=[]
        //         // console.log("beforecut",selectedCells)
        //         // console.log(cellData);
        //         $(".input-cell.selected").each(function () {
        //             console.log(this);
        //             selectedCells.push(getRowCol(this));
        //         })
        //         cut = true;
        //         console.log("after", selectedCells);
        //     });


        //     $(".icon-paste").click(function () {
        //         // console.log(cellData);
        //         emptySheet();
        //         let [rowId, colId] = getRowCol($(".input-cell.selected")[0]);
        //         let rowDistance = rowId - selectedCells[0][0];
        //         let colDistance = colId - selectedCells[0][1];
        //         for (let cell of selectedCells) {
        //             let newRowId = cell[0] + rowDistance;
        //             let newColId = cell[1] + colDistance;
        //             if (!cellData[selectedSheet][newRowId]) {
        //                 cellData[selectedSheet][newRowId] = {};
        //             }
        //             cellData[selectedSheet][newRowId][newColId] = { ...cellData[selectedSheet][cell[0]][cell[1]] };
        //             if (cut) {
        //                 delete cellData[selectedSheet][cell[0]][cell[1]];
        //                 if (Object.keys(cellData[selectedSheet][cell[0]]).length == 0) {
        //                     delete cellData[selectedSheet][cell[0]];
        //                 }
        //             }
        //         }
        //         if (cut) {
        //             cut = false;
        //             selectedCells = [];
        //         }
        //         loadSheet();
        //     })
        //     let graphComponentMatrix = [];
        //     let rows = 100;
        //     let cols = 100;
        //     for (let i = 0; i <= rows; i++) {
        //         let row = [];
        //         for (let j = 0; j <= cols; j++) {
        //             //why array->more than 1 child relation dependacy
        //             row.push([]);
        //         }
        //         graphComponentMatrix.push(row);
        //     }
        //     function isGraphCyclic(graphComponentMatrix) {
        //         let visited = [];
        //         let dfsvisited = [];
        //         for (let i = 1; i <= rows; i++) {
        //             let visitedRow = [];
        //             let dfsvisitedRow = [];
        //             for (let j = 1; j <= cols; j++) {
        //                 visitedRow.push(false);
        //                 dfsvisitedRow.push(false);
        //             }
        //             visited.push(visitedRow);
        //             dfsvisited.push(dfsvisitedRow);
        //         }


        //         for (let i = 0; i <= rows - 1; i++) {
        //             for (let j = 0; j <= cols; j++) {
        //                 if (visited[i][j] === false) {
        //                     let response = dfsCycleDetection(graphComponentMatrix, i, j, visited, dfsvisited);
        //                     if (response === true) return true;
        //                 }
        //             }
        //         }
        //         return false;
        //     }

        //     function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsvisited) {

        //         visited[srcr][srcc] = true;
        //         dfsvisited[srcr][srcc] = true;

        //         for (let children = 0; children < graphComponentMatrix[srcr][srcc].length; children++) {

        //             let [nbrr, nbrc] = graphComponentMatrix[srcr][srcc][children];
        //             if (visited[nbrr][nbrc] === false) {

        //                 let response = dfsCycleDetection(graphComponentMatrix, nbrr, nbrc, visited, dfsvisited);
        //                 if (response === true) {
        //                     return true;
        //                 }
        //             }
        //             else if (visited[nbrr][nbrc] === true && dfsvisited[nbrr][nbrc] === true) {
        //                 {
        //                     return true;
        //                 }
        //             }
        //         }

        //         dfsvisited[srcr][srcc] = false;
        //         return false;

        //     }
        //     let formula = document.querySelector(".formula-input");



        //     formula.addEventListener("keydown", (e) => {

        //         let inputFormula = formula.value;
        //         if (e.key === "Enter" && inputFormula) {
        //             let evaluatedvalue = evaluatedFormula(inputFormula);

        //             //if change in formula ,break old parent child realtion
        //             let [selectedcellrow, selectedcellcol] = getRowCol($(".input-cell.selected"))
        //             if (cellData[selectedSheet][selectedcellrow][selectedcellcol].formula.length > 0 && cellData[selectedSheet][selectedcellrow][selectedcellcol].formula !== inputFormula) {
        //                 removechildToParent(cellData[selectedSheet][selectedcellrow][selectedcellcol].formula);
        //             }
        //             //check formula is cyclic or not
        //             addchildtoGraphComponent(inputFormula, this);
        //             let isCyclic = isGraphCyclic(graphComponentMatrix);
        //             if (isCyclic === true) {
        //                 alert("your formula is cyclic");
        //                 removechildfromgraphcomponent(inputFormula, this);
        //                 return;
        //             }
        //             $(".input-cell.selected").text(evaluatedvalue);
        //             updateCell("text", evaluatedvalue, false);
        //             updateCell("formula", inputFormula, false);
        //             addChildrenParent(inputFormula);
        //             updatechildtoParent(selectedcellrow, selectedcellcol, inputFormula);

        //         }
        //     })





        //     function addchildtoGraphComponent(formula) {
        //         let [crid, ccid] = getRowCol($(".input-cell.selected"));
        //         let encodedFormula = formula.split(" ");
        //         for (let i = 0; i < encodedFormula.length; i++) {
        //             let asciiValue = encodedFormula[i].charCodeAt(0);
        //             if (asciiValue >= 65 && asciiValue <= 90) {
        //                 let [prid, pcid] = getencodedrowcol(encodedFormula[i]);
        //                 graphComponentMatrix[prid][pcid].push([crid, ccid]);
        //             }
        //         }

        //     }

        //     function removechildfromgraphcomponent(formula) {

        //         let encodedFormula = formula.split(" ");
        //         for (let i = 0; i < encodedFormula.length; i++) {
        //             let asciiValue = encodedFormula[i].charCodeAt(0);
        //             if (asciiValue >= 65 && asciiValue <= 90) {
        //                 let [prid, pcid] = getencodedrowcol(encodedFormula[i]);
        //                 graphComponentMatrix[prid][pcid].pop();
        //             }
        //         }


        //     }

        //     function updatechildtoParent(selectedcellrow, selectedcellcol) {
        //         let children = cellData[selectedSheet][selectedcellrow][selectedcellcol].child;
        //         for (let i = 0; i < children.length; i++) {
        //             let childaddress = children[i];
        //             let [childrow, childcol] = getencodedrowcol(childaddress);
        //             let temprory = Ascii.get(selectedcellcol) + selectedcellrow;
        //             let str = cellData[selectedSheet][childrow][childcol].formula;
        //             let nwstr = str.replaceAll(temprory, '( ' + $(".input-cell.selected").text() + ' )');
        //             let newformulaans = evaluatedFormula(nwstr);
        //             cellData[selectedSheet][childrow][childcol].text = newformulaans;
        //             updatechildtoParent(childrow, childcol)
        //         }
        //         emptySheet();
        //         loadSheet();
        //     }

        //     function addChildrenParent(formula) {
        //         // console.log(formula);


        //         let encodedFormula = formula.split(" ");
        //         for (let i = 0; i < encodedFormula.length; i++) {
        //             let asciiValue = encodedFormula[i].charCodeAt(0);
        //             if (asciiValue >= 65 && asciiValue <= 90) {
        //                 let [decodenumId, decodecharId] = getencodedrowcol(encodedFormula[i]);
        //                 let [selectedrow, selectedcol] = getRowCol($(".input-cell.selected"))

        //                 //   console.log(selectedrow,selectedcol,i++);
        //                 if (cellData[selectedSheet][decodenumId][decodecharId].child.length == 0) {
        //                     let b = []
        //                     b.push(Ascii.get(selectedcol) + selectedrow);
        //                     cellData[selectedSheet][decodenumId][decodecharId].child = b;
        //                 }
        //                 else {
        //                     let b = []
        //                     b = cellData[selectedSheet][decodenumId][decodecharId].child;
        //                     b.push(Ascii.get(selectedcol) + selectedrow);
        //                     cellData[selectedSheet][decodenumId][decodecharId].child = b;
        //                 }
        //                 //  console.log(cellData,"afterpermission");    
        //             }
        //         }
        //     }
        //     //remove old connection if there is new formula for the cell
        //     function removechildToParent(formula) {
        //         let encodedFormula = formula.split(" ");
        //         for (let i = 0; i < encodedFormula.length; i++) {
        //             let asciiValue = encodedFormula[i].charCodeAt(0);
        //             if (asciiValue >= 65 && asciiValue <= 90) {
        //                 let [decodenumId, decodecharId] = getencodedrowcol(encodedFormula[i]);
        //                 let [selectedrow, selectedcol] = getRowCol($(".input-cell.selected"))

        //                 //   console.log(selectedrow,selectedcol,i++);
        //                 let idx = cellData[selectedSheet][decodenumId][decodecharId].child.indexOf(Ascii.get(selectedcol) + selectedrow);
        //                 cellData[selectedSheet][decodenumId][decodecharId].child.splice(idx, 1);
        //             }
        //         }
        //     }

        //     function evaluatedFormula(formula) {
        //         let encodedFormula = formula.split(" ");
        //         let temp = "";
        //         for (let i = 0; i < encodedFormula.length; i++) {
        //             let ansofChar = "";//for char part
        //             let ansofNum = "";//for number part
        //             if (encodedFormula[i] == '-' || encodedFormula[i] == '+' || encodedFormula[i] == '*' || encodedFormula[i] == '/' || encodedFormula[i] == '(' || encodedFormula[i] == ')') {
        //                 temp += encodedFormula[i];
        //                 continue;
        //             }

        //             for (let j = 0; j < encodedFormula[i].length; j++) {
        //                 // IF value is A- Z then decode it

        //                 let asciiValue = encodedFormula[i].charCodeAt(j);

        //                 if (asciiValue >= 65 && asciiValue <= 90) {
        //                     // console.log(encodedFormula[i][j])
        //                     ansofChar += encodedFormula[i][j];
        //                     // console.log(ansofChar)
        //                     continue;
        //                 } else {
        //                     ansofNum += encodedFormula[i][j];
        //                 }

        //                 //Ascii map se value nikali
        //                 if (ansofChar.length != 0) {
        //                     let colId = Ascii.get(ansofChar);
        //                     //    console.log(colId);
        //                     //string to int

        //                     let col = parseInt(colId);
        //                     let row = parseInt(ansofNum);
        //                     //    console.log(row,col);
        //                     encodedFormula[i] = cellData[selectedSheet][row][col].text;
        //                 }
        //             }
        //             temp += encodedFormula[i];
        //         }
        //         return eval(temp);
        //     }
        //     function getencodedrowcol(encodedFormula) {
        //         let decodethestring = "", j = 0;
        //         while (encodedFormula.charCodeAt(j) >= 65 && encodedFormula.charCodeAt(j) <= 90 && j < encodedFormula.length) {
        //             decodethestring += encodedFormula[j];
        //             j++;
        //         }
        //         let decodethenum = "";
        //         while (j < encodedFormula.length) {
        //             decodethenum += encodedFormula[j];
        //             j++;
        //         }
        //         let decodenumId = parseInt(decodethenum);
        //         let decodecharId = Ascii.get(decodethestring)
        //         return [decodenumId, decodecharId];
        //     }
        //     let downloadBtn = document.querySelector(".download");
        //     let openBtn = document.querySelector(".open");

        //     downloadBtn.addEventListener("click", () => {
        //         let jsonData = JSON.stringify([cellData[selectedSheet], graphComponentMatrix]);
        //         let file = new Blob([jsonData], { type: "application/json" })
        //         let a = document.createElement("a");
        //         a.href = URL.createObjectURL(file);
        //         a.download = "SheetData.json";
        //         a.click();

        //     })

        //     //open task(upload)
        //     openBtn.addEventListener("click", () => {
        //         let input = document.createElement("input");
        //         input.setAttribute("type", "file");
        //         input.click();
        //         //  console.log(input);
        //         input.addEventListener("change", () => {
        //             let fr = new FileReader();
        //             let files = input.files;
        //             let fileObj = files[0];
        //             fr.readAsText(fileObj);
        //             fr.addEventListener("load", () => {
        //                 let readSheetData = JSON.parse(fr.result);
        //                 //new sheet create

        //                 createnewsheet();

        //                 for (let i = 1; i <= 100; i++) {
        //                     console.log(readSheetData[0][i], selectedSheet);
        //                     cellData[selectedSheet][i] = { ...readSheetData[0][i] };

        //                 }


        //                 graphComponentMatrix = readSheetData[1];
        //                 loadSheet();

        //             });

        //         })
        //     })
        //     create row 
        //     let rows=100;
        //     let cols=26;
        //     let col=document.querySelector(".column-name-container");
        //     let row=document.querySelector(".row-name-container");
        //     let cellCont =document.querySelector(".input-cell-container");
        //     let adressBar =document.querySelector(".selected-cell")
        // for(let i=0;i<100;i++){
        // let p=document.createElement("div")  
        // p.setAttribute("class","row-name")
        // p.innerText=i+1;
        // row.appendChild(p);
        // }
        // //create col

        // for(let i=0;i<26;i++){
        // let p=document.createElement("div")  
        // p.setAttribute("class","column-name")
        // p.innerText=String.fromCharCode(65+i);
        // col.appendChild(p);
        // }
        // for(let i=0;i< rows;i++){
        //     let row =  document.createElement("div");
        //     row.setAttribute("class","cell-row");
        //     for(let j=0;j< cols ;j++){
        //         let cell=document.createElement("div");
        //         cell.setAttribute("class","input-cell");
        //         cell.setAttribute("contenteditable","true");
        //         row.appendChild(cell);
        //         addListenerForAddressBarDisplay(cell,i,j);
        //     }
        //     cellCont.appendChild(row);
        // }
        // function addListenerForAddressBarDisplay(cell,i,j){
        // cell.addEventListener("click",()=>{
        //     let rowId = i+1;
        //     let colId = String.fromCharCode(65+j);
        //     adressBar.innerText =`${colId}${rowId}`
        // })
        // }


    }
}


</script>

<style>
body {
    margin: 0;
    overflow: hidden;
    font-size: 14px;
}

* {
    box-sizing: border-box;
}

.container {
    height: 100vh;
    position: relative;
}


.menu-item {
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    font-size: 18;
    display: flex;
    align-items: center;
}

.menu-item.selected {
    background-color: #fff;
    color: #107c41;
}

.menu-item:hover {
    background-color: #0b542c;
}

.menu-icon.selected {
    background-color: lightgray;
}

.font-family-selector {
    width: 150px;
    font-family: 'Noto Sans';
}

.selector {
    height: 30px;
    font-size: 18px;
}


.menu-item.selected:hover {
    background-color: #ffff;
    cursor: default;
}

.menu-icon-bar {
    height: 6vh;
    display: flex;
    align-items: center;
    background-color: rgb(241, 241, 241);
    display: flex;


}

.menu-icon {
    padding-left: 10px;
    padding-right: 10px;
}

.menu-icon:hover {
    background-color: lightgray;
    cursor: pointer;
}

.formula-bar {
    height: 5vh;
    display: flex;
    align-items: center;

    background-color: rgb(241, 241, 241);
}

.formula-editor {
    height: 70%;
    border: 1px solid lightgray;
    background-color: #fff;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    display: flex;
    align-items: center;

}

.selected-cell {
    width: 120px;
}

.function-sign {
    width: 40px;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.formula-input {
    width: calc(100vw - 160px);
}

.data-container {
    height: 75vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

.select-all {
    width: 30px;
    height: 30px;
    border: 1px solid lightgray;
}

.column-name-container {
    width: calc(100vw - 30px);
    height: 30px;

    display: flex;
    overflow: hidden;
}

.column-name {
    height: 100%;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid lightgray;
    font-weight: bold;
}

.row-name-container {
    width: 30px;
    height: calc(75vh - 30px);

    overflow: hidden;
}

.row-name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    border-bottom: 1px solid lightgray;
}

.cell-row {
    display: flex;
}

.input-cell {
    min-width: 100px;
    min-height: 25px;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    outline-color: #107c41;
    font-size: 14px;
    font-family: 'Noto Sans';
}

.input-cell.selected {
    border: 2px solid #107c41;
}

.input-cell-container {
    width: calc(100vw - 30px);
    height: calc(75vh - 30px);
    border: 1px solid lightgray;
    overflow: scroll;
}

.sheet-bar {
    height: 4vh;
    display: flex;
    align-items: center;
}

.scroller {
    width: 70px;
}

.icon-left-scroll,
.icon-right-scroll {
    font-size: 30px;
    cursor: pointer;
}

.icon-left-scroll:hover,
.icon-right-scroll:hover {
    background-color: lightgray;
}

.icon-add {
    color: #107c41;
    width: 40px;
}

.icon-add:hover {
    cursor: pointer;
    transform: scale(1.2);
}


.sheet_tab_container {
    border: 1px solid lightgray;
    /* gap hona chaiye between - and data */
    width: calc(100vw - 110px);
    display: flex;
}

.sheet-tab {
    /* border-bottom:4px solid #107c41; */

    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    width: 70px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-right: 1px solid lightgray;
}

.sheet-tab.selected {
    border-bottom: 4px solid #107c41;
}

.sheet-tab:hover {
    cursor: pointer;
    background-color: lightgray;
}

.sheet-tab.selected:hover {
    cursor: default;
    background-color: #fff;
}

.input-cell.top-cell-selected {
    border-top: none;
}

.input-cell.bottom-cell-selected {
    border-bottom: 1px solid lightgray;
}

.input-cell.right-cell-selected {
    border-right: 1px solid lightgray
}

.input-cell.left-cell-selected {
    border-left: none;
}

.color-picker {
    position: absolute;
    width: 26px;
    height: 12px;
    border: none;
    top: 19px;
    padding: 0;
    left: 9px;
    cursor: pointer;
}


.icon-color-fill,
.icon-color-text {
    position: relative;
}

.sheet-options-modal {
    position: absolute;
    bottom: 4vh;
    height: 60px;
    background-color: #fff;
    width: 70px;
    box-shadow: 0 0 5px 3px lightgray;
}

.sheet-rename,
.sheet-delete {
    height: 30px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sheet-rename:hover,
.sheet-delete:hover {
    background-color: lightgray;
    cursor: pointer;
}

.sheet-rename-modal {
    position: absolute;
    height: 180px;
    width: 250px;
    top: calc(100vh / 2 - 90px);
    left: calc(100vw / 2 - 125px);
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 3px lightgrey;

}

.action-button {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
}

.modal-title {
    font-size: 20px;
}

.new-sheet-name {
    height: 26px;
    font-size: 18px;
    outline-color: #107c41;
}

.submit-button {
    cursor: pointer;
    background-color: #107c41;
    color: white;
    padding: 8px;
}

.cancel-button {
    cursor: pointer;
    background-color: lightgray;
    padding: 8px;
}

.icon-copy,
.icon-paste,
.icon-cut,
.download,
.open,
.savedb,
.opendb {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;

}

.savedb,
.opendb {
    background-color: #107c41;
    border-radius: 6px;
    color: white;
    margin: 6px;
}

.savedb:hover,
.opendb:hover {
    background-color: #107c41;
    border-radius: 6px;
    color: palegreen;
}

.formula-editor.selected-cell {
    font-size: 15px;
    justify-content: center;
}

@media screen and (max-width: 750px) {
    .menu-icon-bar {
        flex-wrap: wrap;
        height: 14vh;
        align-items: center;
        background-color: rgb(241, 241, 241);
        display: flex;
    }

    .sheet-bar {
        height: calc(100vh - 92vh);
        display: flex;
        align-items: center;
    }

    .data-container {
        height: 65vh;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
}
</style>
