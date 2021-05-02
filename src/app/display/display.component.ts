import { Component, Input, OnInit, Optional } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(@Optional() private parent : AppComponent) { }
  @Input() parentGender: any;
  @Input() lstGenPets: any;
  ngOnInit(): void {
  }
}
