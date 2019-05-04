import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = '07 shopping Mall';
  state:string;
  handleClick(msg:string):void{
     this.state = msg ;
  }
 
}
