import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'apps/news-app/src/environments/environment';
import { ChangeDateFormatService } from '../../services/change-date-format.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'news-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected: string = 'All'


  constructor(
    public sharedService: SharedService,
    private changeDateFormatService: ChangeDateFormatService
  ) { }

  ngOnInit(): void {

  }

  setStartDate(event: Date) {

    if (!event) {
      this.sharedService.getNewsData()
      return
    }

    this.changeDateFormatService.changeDate(event).then((res: any) => {
      let param = {
        object: 'from',
        value: res
      }
      this.sharedService.getNewsData(param)
    }).catch(err => {
      console.log(err)
    })
  }

  setEndDate(event: Date) {
    if (!event) {
      this.sharedService.getNewsData()
      return
    }

    this.changeDateFormatService.changeDate(event).then((res: any) => {
      let param = {
        object: 'to',
        value: res
      }
      this.sharedService.getNewsData(param)
    }).catch(err => {
      console.log(err)
    })
  }

  changeAuthor(author: string) {
    if (author == 'All') {
      this.sharedService.newsList = this.sharedService.newsListTemp
      return
    }
    this.sharedService.newsList = this.sharedService.newsListTemp.filter(x => x.author == author)
  }
}
