import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = "List of Posts";
  @Input() parentMessage?:string;
  postComponentMessage:string = 'Message from post component to postlist component';
  childMessage : string = 'Message from child i.e. Post component';

  outputChildMessage:string = 'Message from child component through Output';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

}
