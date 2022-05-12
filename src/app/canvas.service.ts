import { Injectable } from '@angular/core';
import { CellComponent } from './cell/cell.component';

const NUM_COLUMNS = 5;
const NUM_ROWS = 6;
const GREEN = "🟩";
const YELLOW = "🟨";
const GREY = "⬜";

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  public rows: Array<Array<CellComponent>> = new Array();

  constructor() {
    this.refreshCanvas();
   }

  public refreshCanvas() {
    for(let i = 0; i < NUM_ROWS; i++) {
      let row: Array<CellComponent> = new Array<CellComponent>();
      for(let j = 0; j < 5; j++) {
        row[j] = new CellComponent(this);
      }
      this.rows[i] = row;
     }
  }

  public copyToClipboard() {
    console.log(this.rows);
    let output: string = "";
    for(let i = 0; i < NUM_ROWS; i++) {
      let row = this.rows[i];
      for(let j = 0; j < NUM_COLUMNS; j++) {
        let cell = row[j];
        switch(cell.value){
          case(0):
            output = output + GREY;
            break;
          case(1):
            output = output + GREEN;
            break;
          case(2):
            output = output + YELLOW;
            break;
        }
      }
      output = output + '\n';
      
     }
     output = output + "Artle 10\\10"
     console.log(output);

  }
}
