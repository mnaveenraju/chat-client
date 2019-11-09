import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../services/chat-list.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  userData: any = [];
  userList: any = [];
  messages = [];
  selectedChatId: any;
  chatType: String;
  groupList: String;
  constructor(
    private chatListService: ChatListService
  ) { }

  ngOnInit() {
    this.getChatList();
    this.getUserList();
    this.getGroupList();
  }

  getChatList() {
    this.chatListService.getChatList().subscribe(res => {
      this.userData = res['res'];
    }, err => {

    });
  }

  getUserList() {
    this.chatListService.getUserList().subscribe(res => {
      this.userList = res['res'];
    }, err => {

    })
  }

  getGroupList() {
    this.chatListService.getGroupList().subscribe(res => {
      this.groupList = res['res'];
      console.log(this.groupList);
      
    }, err => {

    })
  }

  chatWithUser(id, chatType) {        
    this.selectedChatId = id;
    this.chatType = chatType;
  }

}

