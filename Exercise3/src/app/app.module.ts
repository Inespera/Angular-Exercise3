import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { TransactionService } from './transaction.service';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TransactionService],
  bootstrap: [ListComponent],
})
export class AppModule {}