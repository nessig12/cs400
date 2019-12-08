import { Component, OnInit, Input } from '@angular/core';
import { HpModel} from '../models/hpModel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() character: HpModel;

  constructor() { }

  ngOnInit() {
  }
}
