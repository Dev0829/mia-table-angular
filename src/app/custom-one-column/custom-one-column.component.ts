import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from 'src/app/public-api';

@Component({
  selector: 'app-custom-one-column',
  templateUrl: './custom-one-column.component.html',
  styleUrls: ['./custom-one-column.component.scss']
})
export class CustomOneColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
