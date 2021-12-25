import { Component, Input, OnInit } from '@angular/core';
import { NEWS } from '../../models/news';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() news: NEWS = new NEWS()

  constructor() { }

  ngOnInit(): void {
  }


  goToNews(link: string) {
    window.open(
      link,
      '_blank'
    )
  }

}
