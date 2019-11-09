import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../services/chat-list.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private chatListService: ChatListService, private router: Router) { }

  ngOnInit() {
  }

  login(data) {
    this.chatListService.login(data).subscribe(res => {
      
      if (res['res'] && res['res']['token']) {
        let user = {
          firstName: res['res'].firstName,
            lastName: res['res'].lastName,
            id: res['res'].id
        }

        localStorage.setItem('authorization', res['token']);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/chatlist']);
      }
    }, err => {

    })
  }

}
