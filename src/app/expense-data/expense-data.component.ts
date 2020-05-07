import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-data',
  templateUrl: './expense-data.component.html',
  styleUrls: ['./expense-data.component.css']
})
export class ExpenseDataComponent implements OnInit {

  @ViewChild("expenseDesc", {static: true}) getDesc: ElementRef;
  @ViewChild("expenseDate", {static: true}) getDate: ElementRef;
  @ViewChild("expenseAmount", {static: true}) getAmount: ElementRef;

  @Output() throwExpenses = new EventEmitter<{description: string, date: string, amount: string}>();
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.throwExpenses.emit({description: this.getDesc.nativeElement.value, date: this.getDate.nativeElement.value, amount: this.getAmount.nativeElement.value});
  }


}
