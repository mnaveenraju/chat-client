import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatListService {

  constructor( private http: HttpClient) {

  }

  httpOptions= {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGM1NzkzZTAyMzE5YTFjYWFiOTY2MGMiLCJpYXQiOjE1NzMyMjM2OTJ9.srFCcckynr4R5LK1a1v6Ln78MGpcTB_yXh1qpFcqLVM'
      })
    }

  login(data) {
    const url = environment.serverUrl+'login';
    return this.http.post(url, data, this.httpOptions) 
  }

  //get chat list
  getChatList() {
    const url = environment.serverUrl+'get_msgs';
    return this.http.get(url, this.httpOptions)   
  }

  //get chat list
  getUserChatList(data) {
    const url = environment.serverUrl+'get_user_msgs';
    return this.http.post(url, data, this.httpOptions)   
  }


  //get chat list
  getUserList() {
    const url = environment.serverUrl+'list_user';
    return this.http.get(url, this.httpOptions)   
  }

  getGroupList() {
    const url = environment.serverUrl+'list_group';
    return this.http.get(url, this.httpOptions)   
  }

  //send message
  sendMessage(data) {
    const url = environment.serverUrl+'send_msg';
    return this.http.post(url, data, this.httpOptions) 
  }

   //update chat
   updateChat(data) {
    const url = environment.serverUrl+'chat/update';
    return this.http.put(url, data, this.httpOptions) 
  }

   //de delete
   deleteChat(id) {
    const url = environment.serverUrl+'chat/delete/'+id;
    return this.http.delete(url, this.httpOptions) 
  }

}
