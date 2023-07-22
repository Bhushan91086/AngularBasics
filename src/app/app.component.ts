import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngularBasics';
  parentMessage:string = 'Message from app component to post component';
  @ViewChild(PostComponent) childComp;
  childMessage : string;
  receivedMsgFromChild:string;

  constructor(){
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.childMessage = this.childComp.childMessage;
  }

  receivedMessage($event){
    this.receivedMsgFromChild = $event;
  }
}
