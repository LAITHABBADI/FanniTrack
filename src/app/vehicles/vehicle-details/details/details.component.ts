import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'details-card',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
