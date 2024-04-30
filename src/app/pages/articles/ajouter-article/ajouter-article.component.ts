import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']  
})
export class AjouterArticleComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  cancel(): void {
    this.router.navigate(['/articles']); 
  }
}
