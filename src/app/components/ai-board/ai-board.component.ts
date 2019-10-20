import { Component, OnInit, Input } from '@angular/core';
import { EngineService } from 'app/services/engine.service';
import { Shape, ShapeFactory } from 'app/models/shape-types';


@Component({
  selector: 'app-ai-board',
  templateUrl: './ai-board.component.html',
  styleUrls: ['./ai-board.component.scss']
})
export class AiBoardComponent implements OnInit {

  @Input() player: string;

  displayedShapes: Shape[];
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
    this.engineService.shapeAI.subscribe(aiShape => {
      console.log(aiShape);
      console.log(this.displayedShapes);
      this.selectedShape = this.displayedShapes.filter(x => x.id === aiShape)[0];
    });
  }

  selectShape(shape: Shape) {
    // Ignore on click for non-player board
  }
}
