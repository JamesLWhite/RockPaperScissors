import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shape } from 'app/models/shape.enum';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  @Input() type: Shape;
  @Output() selectedShape = new EventEmitter<Shape>();

  constructor() { }

  ngOnInit() {
  }

  select(){
    this.selectedShape.emit(this.type);
  }

}
