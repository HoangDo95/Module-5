import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = '#b72a2a';
  color1 = '#b72a2a';

  constructor() {
  }

  ngOnInit(): void {
  }

}
