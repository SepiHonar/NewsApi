import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IApiRepository {
    getNews(params: HttpParams): Observable<any>
}
