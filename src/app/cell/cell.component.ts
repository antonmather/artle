import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() public value: number;

  constructor() { 
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
  }
}
