import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shape } from 'app/models/shape-types';

@Component({
  selector: 'app-shape',
  templateUrl: 'shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  @Input() shape: Shape;
  @Output() selectedShape = new EventEmitter<Shape>();

  shapeFillToggle = false;

  constructor() { }

  ngOnInit() {
  }

  select(){
    this.selectedShape.emit(this.shape);
  }

  highlightToggle(): void {
    this.shapeFillToggle = !this.shapeFillToggle;
  }

  shapeFill(){
    return this.shapeFillToggle ? 'fas' : 'far';
  }

}
