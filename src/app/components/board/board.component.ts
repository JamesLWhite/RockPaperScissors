import { Component, OnInit } from '@angular/core';
import { EngineService } from "app/services/engine.service";
import { Shapes, Shape } from 'app/models/shape-types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  winner: string;

  displayedShapes = [Shapes.Rock, Shapes.Paper, Shapes.Scissors]
  selectedShape: Shape;

  constructor(private engineService: EngineService) { }

  ngOnInit() {
    this.engineService.currentWinner.subscribe(winner => this.winner = winner)
  }   

  selectShape(shape: Shape) {
    this.selectedShape = shape
    this.engineService.submitResult(shape)
  }

  getSelectedShape(){
    return this.selectedShape ? this.selectedShape.icon : ""
  }

}
