import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool:boolean = true;
  enteredText:string;

  onButtonClick(){
    console.log("Button click event execute...");
  }

  onKeyUp(){
    console.log(this.enteredText);
  }
}
