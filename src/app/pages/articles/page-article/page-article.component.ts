import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css'],
  providers: [ArticleService] ,

})
export class PageArticleComponent implements OnInit{
  listArticles: any[] = []; // Stocke les articles récupérées depuis le serveur

  constructor ( 
    private router :Router,
    private articleService: ArticleService
  ) {}


  ngOnInit(): void {
    console.log('on init...');
    this.articleService.getArticle().subscribe(
      (result) => {
        this.listArticles = result; 
      }
      
    );
    }


  nouvelArticle():void{
    this.router.navigate(['ajouterArticle']);
  }
}
