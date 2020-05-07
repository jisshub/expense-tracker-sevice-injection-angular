import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseDataComponent } from './expense-data/expense-data.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseDataComponent,
    ListExpenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
