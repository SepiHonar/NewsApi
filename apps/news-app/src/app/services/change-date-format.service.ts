import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDateFormatService {

  constructor() { }


  changeDate(inputDate: Date) {
    return new Promise((resolve, reject) => {
      if (!inputDate)
        reject('invalid input date')
      let year = inputDate.getFullYear();
      let month = inputDate.getMonth() + 1;
      let day = inputDate.getDate();
      let fullYear: string = year + '-' + month + '-' + day
      resolve(fullYear)

    })
  }
}
