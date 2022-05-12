import { Component, Input, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CanvasService } from '../canvas.service';

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

  constructor(public service: CanvasService) {
    
  }

  ngOnInit(): void {
  }

  public getRows(): Array<Array<CellComponent>> {
    return this.service.rows;
  }

  public refreshCanvas() {
    this.service.refreshCanvas();
  }

  public copyToClipboard(){
    this.service.copyToClipboard();
  }
  



}
