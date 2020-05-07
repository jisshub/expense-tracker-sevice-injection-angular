import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  @Input() eachExpense: {description: string, date: string, amount: string}
  @Input() indexPos: number;
  constructor() { }

  ngOnInit(): void {
  }

}
