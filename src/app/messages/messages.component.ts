import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChatListService } from '../services/chat-list.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnChanges {
  messages: any;
  user: Object;
  messageFrom: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  })
  @Input() selectedChatId: String;
  @Input() chatType: String;

  constructor(private chatListService: ChatListService) {

  }

  ngOnInit() {
    console.log('selectedChatId', this.selectedChatId);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getChatHistory()
  }

  ngOnChanges() {
    if (this.selectedChatId) {
      this.getChatHistory()
    }
  }

  getChatHistory() {
    let reqObj = {
      toId: this.selectedChatId,
      chatType: this.chatType
    }
    this.chatListService.getUserChatList(reqObj).subscribe(res => {
      if (this.chatType=='group') {
        this.messages = res['res']['messages'];
      } else {
        this.messages = res['res'];
      }
    }, err => {

    })
  }

  sendMessage(message) {
    if (this.chatType == 'group') {
      message.groupId = this.selectedChatId;
    } else {
      message.userId = this.selectedChatId;
    }

    this.chatListService.sendMessage(message).subscribe(res => {
      this.getChatHistory();
      this.messageFrom.reset();
    }, err => {})
  }

}
