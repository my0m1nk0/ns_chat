import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
@ViewChild('new_chat') modal:ModalController;
@ViewChild('popover') popover:PopoverController;
segment='chats';
open_new_chat=false;

users=[
  {
    id:1,
    name:'John',
    photo:'https://i.pravatar.cc/385'
  },
  {
    id:2,
    name:'William',
    photo:'https://i.pravatar.cc/315'
  },
  {
    id:3,
    name:'Darling',
    photo:'https://i.pravatar.cc/345'
  }
]
chatRooms=[
  {
    id:1,
    name:'John',
    photo:'https://i.pravatar.cc/385'
  },
  {
    id:2,
    name:'William',
    photo:'https://i.pravatar.cc/315'
  },
  {
    id:3,
    name:'Darling',
    photo:'https://i.pravatar.cc/345'
  }
]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSegmentChaged($event: Event) {
    console.log($event.defaultPrevented.valueOf);
  }

  logout() {
    this.popover.dismiss();
  }
  
  newChat() {
    this.open_new_chat = true;
  }

  cancel(){
    this.modal.dismiss();
    this.open_new_chat =false;
  }

  onWillDismiss($event:any){

  }
  startChat(event:any){

  }
  getChat(item){
    this.router.navigate(['/','home','chats',item?.id])
  }

}
