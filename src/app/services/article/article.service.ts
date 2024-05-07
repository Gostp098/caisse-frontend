import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../pages/articles/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly API_URL="http://localhost:8081"
  readonly ENDPOINT_getArticle="/articles/all"
  readonly ENDPOINT_postArticle="/articles/save"
  
  
  constructor(private httpClient: HttpClient) {}


  public getArticle(): Observable<Article[]> {
    return this.httpClient.get<Article[]>( this.API_URL+this.ENDPOINT_getArticle)
}

enregistrerArticle(article: Article) {
  return this.httpClient.post(this.API_URL+this.ENDPOINT_postArticle,article);
}
 
}


