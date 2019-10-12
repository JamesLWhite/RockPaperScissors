import { Component, OnInit } from '@angular/core';
import { EngineService } from "app/services/engine.service";
import { Shape } from "app/models/shape.enum";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  winner: string;

  displayedShapes = [Shape.Rock, Shape.Paper, Shape.Scissors]
  selectedType: Shape;

  constructor(private engineService: EngineService) { }

  ngOnInit() {
    this.engineService.currentWinner.subscribe(winner => this.winner = winner)
  }   

  selectShape(shape: Shape) {
    this.engineService.submitResult(shape)
  }

}
