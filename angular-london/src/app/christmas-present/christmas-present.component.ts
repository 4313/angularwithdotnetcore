import { Component, OnInit, Input } from '@angular/core';
import { Present } from '../models/present';

@Component({
  selector: 'app-christmas-present',
  templateUrl: './christmas-present.component.html',
  styleUrls: ['./christmas-present.component.css']
})
export class ChristmasPresentComponent implements OnInit {
  @Input()present: Present;
  isHovered:boolean = false;
  constructor() { 
  }
  ngOnInit() {
  }
  onHover(): void {
    this.isHovered = true;
  }
  offHover(): void {
    this.isHovered = false;
  }
}
