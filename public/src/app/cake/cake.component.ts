import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() recordToShow: any;
  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerEvent() {
    this.eventEmitter.emit();
  }

  calcRatingAvg(comments: [any]): Number {
    let sum = 0;
    for (const rec of comments) {
      sum += rec.rate;
    }

    if (comments.length > 0) {
      return Math.round((sum / comments.length) * 10) / 10;
    } else {
      return 0;
    }
  }
}
