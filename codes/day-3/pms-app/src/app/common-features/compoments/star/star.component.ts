import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  width: number = 100;
  constructor() {
    console.log(this.rating)
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    //console.log(simpleChanges)
    this.width = this.rating * 16
  }
}
