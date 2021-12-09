import { Component, OnInit } from '@angular/core';
//import {Socket} from '../../../../node_modules/socket.io'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }

  // render(data) {
  //   var html = data.map(function (elem, index) {
  //     return (`<div>
  //               <strong>${elem.author}</strong>:
  //               <em>${elem.text}</em>
  //             </div>`);
  //   }).join(" ");

  //   document.getElementById('messages').innerHTML = html;
  // }

  addMessage() {
    var message = {
      author: (document.getElementById("username") as HTMLInputElement).value,
      text: (document.getElementById("texto") as HTMLInputElement).value
    };
    // this.socketI.emit('new-message', message);
    // return false;
    console.log(message.author,message.text)
  }

}
