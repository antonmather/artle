import { Component, OnInit, Input } from '@angular/core';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() public value: number;

  constructor(public service: CanvasService) { 
    this.value = 0;
  }

  ngOnInit(): void {
  }

  updateValue(): void {
    if(this.value == 2){
      this.value = 0;
    } else {
      this.value++;
    }
    console.log(this.value);
  }
}
