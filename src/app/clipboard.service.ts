import { Inject, Injectable } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';

const NUM_COLUMNS = 5;
const NUM_ROWS = 6;
const GREEN = "🟩";
const YELLOW = "🟨";
const GREY = "⬜";

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  public canvas: CanvasComponent = new CanvasComponent(this);
  

  constructor() {
    
   }

  public copyToClipboard(canvas: CanvasComponent) {
    console.log(canvas);
    let output: string = "";
    for(let i = 0; i < NUM_ROWS; i++) {
      let row = canvas.rows[i];
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
