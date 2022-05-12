import { Component, Input, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

const NUM_COLUMNS = 5;
const NUM_ROWS = 6;
const GREEN = "🟩";
const YELLOW = "🟨";
const GREY = "⬜";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  public rows: Array<Array<CellComponent>> = new Array();


  constructor() {
    this.refreshCanvas();
    
  }

  ngOnInit(): void {
  }

  public refreshCanvas() {
    for(let i = 0; i < NUM_ROWS; i++) {
      let row: Array<CellComponent> = new Array<CellComponent>();
      for(let j = 0; j < 5; j++) {
        row[j] = new CellComponent();
      }
      this.rows[i] = row;
     }
  }

  public copyToClipboard(rows: Array<Array<CellComponent>>) {
    console.log(rows);
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
