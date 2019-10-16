import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shape } from 'app/models/shape-types';

@Component({
  selector: 'app-shape',
  template: `
    <span class="{{shape.displayColor}}">
        <i (click)=select() class="far {{shape.icon}}"></i>
    </span>
  `,
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  @Input() shape: Shape;
  @Output() selectedShape = new EventEmitter<Shape>();

  constructor() { }

  ngOnInit() {
  }

  select(){
    this.selectedShape.emit(this.shape);
  }
}
