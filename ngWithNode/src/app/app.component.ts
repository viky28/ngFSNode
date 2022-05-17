import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService){}

  getFiles() {
    this.appService.getApi().subscribe((res)=>{
      console.log("getting resposne",res)
    })
  }
}