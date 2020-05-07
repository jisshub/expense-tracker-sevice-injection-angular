import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // provide the instance of ExpenseService 
  providers: [ExpenseService],
})
export class AppComponent implements OnInit{
  title = 'expense-tracker-app';

  // define a constructor to let angular v need an instance of ExoenseServices
  constructor(private xpenseService: ExpenseService){}

  expenseList: {description: string, date: string, amount: string}[] = [];

  // define ngOnInit() life cycle hook,
  ngOnInit(){
    // access the array defined in services.ts
    // assign it ti expenseList defined in the compoenent
    this.expenseList=this.xpenseService.expenseList
  }
  

  // onFetchExpense(accessData: {description: string, date: string, amount: string} ){
  //     this.expenseList.push({
  //       description: accessData.description,
  //       date: accessData.date,
  //       amount: accessData.amount
  //     })
  //   console.log(this.expenseList);    
  // }
  
}
