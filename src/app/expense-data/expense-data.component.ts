import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-data',
  templateUrl: './expense-data.component.html',
  styleUrls: ['./expense-data.component.css']
})
export class ExpenseDataComponent implements OnInit {

  @ViewChild("expenseDesc", {static: true}) getDesc: ElementRef;
  @ViewChild("expenseDate", {static: true}) getDate: ElementRef;
  @ViewChild("expenseAmount", {static: true}) getAmount: ElementRef;

  // @Output() throwExpenses = new EventEmitter<{description: string, date: string, amount: string}>();
  constructor(private xpenseService: ExpenseService) { }

  ngOnInit(): void {

  }

  onSubmit(){

    // invoke the addExpense() - pass the arguments as string.
    // here v pass of each inputs
    this.xpenseService.addExpenses(this.getDesc.nativeElement.value, 
                                   this.getDate.nativeElement.value,
                                   this.getAmount.nativeElement.value);

    // this.throwExpenses.emit({description: this.getDesc.nativeElement.value, date: this.getDate.nativeElement.value, amount: this.getAmount.nativeElement.value});
  }


}
