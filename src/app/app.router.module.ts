import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'chatlist', component: ChatListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
