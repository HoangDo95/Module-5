import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  total = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.total = '';
  }

  number(n: string) {
    this.total += n;
  }

  result() {
    // tslint:disable-next-line:no-eval
    this.total = eval(this.total);
  }

}
