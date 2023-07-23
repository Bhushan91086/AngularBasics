import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities : Array<string> = ['Pune', 'Kolhapur', 'Tokyo', 'Paris', 'Mumbai'];

  countryObj : Array<any> = [
    {id:1, Name:'India'},
    {id:2, Name:'Japan'},
    {id:3, Name:'France'},
    {id:4, Name:'USA'},
    {id:5, Name:'Norway'}
  ];

}
