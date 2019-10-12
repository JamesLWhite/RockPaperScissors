import { Component, OnInit } from '@angular/core';
import { Shape } from "app/models/shape.enum";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  displayedShapes: Shape[] = [Shape.Rock, Shape.Paper, Shape.Scissors]
  selectedType: Shape;

  constructor() { }

  ngOnInit() {
  }

}
