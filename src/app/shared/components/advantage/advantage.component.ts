import { Component, Input, OnInit } from '@angular/core';
import { Advantage } from '../../models/advantage.model';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage!: Advantage;

  constructor() { }

  ngOnInit(): void {
  }

}
