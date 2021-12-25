import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NEWS } from '../models/news';
import { ApiRepositoryService } from './api-repository.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  qItem: string = '*';
  fromDate: string = '';
  toDate: string = '';

  newsList: NEWS[] = []
  newsListTemp: NEWS[] = []
  authors: string[] = ['All']

  constructor(
    private apiRepositoryService: ApiRepositoryService
  ) { }


  getNewsData(param?: any) {

    if (!this.qItem)
      this.qItem = '*'

    let params = new HttpParams()
      .set('q', this.qItem)
      .set('apiKey', environment.apiKey)


    if (param)
      params = params.set(param.object, param.value)

    this.apiRepositoryService.getNews(params).subscribe((res: any) => {


      this.newsList = res["articles"]
      this.newsListTemp = res["articles"]
      this.getArticleAuthors()

    })
  }

  getArticleAuthors() {
    if (this.newsList.length == 0)
      return
    this.authors = ['All']
    this.newsList.forEach(item => {
      let author = this.authors.find(x => x == item.author)
      if (author)
        return
      this.authors.push(item.author)
    })
  }
}
