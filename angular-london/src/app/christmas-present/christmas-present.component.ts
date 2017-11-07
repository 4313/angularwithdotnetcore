import { Component, Input } from '@angular/core';
import { Present } from '../models/present';

@Component({
  selector: 'app-christmas-present',
  templateUrl: './christmas-present.component.html',
  styleUrls: ['./christmas-present.component.css']
})
export class ChristmasPresentComponent {
  @Input()present: Present;

  isHovered:boolean = false;
  constructor() { 
  }
  onHover(): void {
    this.isHovered = true;
  }
  offHover(): void {
    this.isHovered = false;
  }
  take(nameOfPurchaser: string): void {
    this.present.nameOfPurchaser = nameOfPurchaser;
    this.present.isTaken = true;
  }
  unTake():void {
    this.present.nameOfPurchaser = null;
    this.present.isTaken = false;
  }
}
