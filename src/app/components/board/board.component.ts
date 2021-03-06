import { Component, OnInit, Input } from '@angular/core';
import { EngineService } from 'app/services/engine.service';
import { Shape, ShapeFactory, ShapeColour } from 'app/models/shape-types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() player: string;

  public winner: string;

  public displayedShapes: Shape[];
  public selectedShape: Shape;

  constructor(private engineService: EngineService) {
    const shapeFactory = new ShapeFactory();
    this.displayedShapes = [
      shapeFactory.createRock(),
      shapeFactory.createPaper(),
      shapeFactory.createScissors()
    ];
  }

  ngOnInit() {
    this.engineService.currentWinner.subscribe(winner => this.winner = winner);
  }

  selectShape(shape: Shape) {
    this.selectedShape = shape;

    // Set the selected shapes
    this.displayedShapes.forEach((displayShape) => displayShape.displayColor = ShapeColour.DEFAULT);

    this.selectedShape.displayColor = ShapeColour.GREEN;
    this.engineService.submitResult(shape);
  }
}
