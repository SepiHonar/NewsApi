import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    public sharedService: SharedService
  ) { }


  ngOnInit(): void {
    this.sharedService.getNewsData();
  }



}
