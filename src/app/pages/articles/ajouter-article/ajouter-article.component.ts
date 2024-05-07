import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { Article } from '../article';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']  
})
export class AjouterArticleComponent implements OnInit {

  article: Article = {
    idCategory: '',
    photo: '',
    prixUnitaireHt: '',
    prixUnitaireTtc: '',
    tauxTva: '',
    code: '',
    designation: '',
  };

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) {}


  ngOnInit(): void {}

  
  cancel(): void {
    this.router.navigate(['/articles']); 
  }


  enregistrerArticle() {
    this.articleService.enregistrerArticle(this.article).subscribe(
        response => {
          console.log('Article ajoutée avec succès!', response);
          
        },

        error => {
          console.error('Article existe déja !', error);
        }
    );
    this.router.navigate(['/articles']);
 }   

}
