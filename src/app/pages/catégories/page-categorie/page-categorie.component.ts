import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css'], 
  providers: [CategoryService] 
})


export class PageCategorieComponent implements OnInit {
  listCategories: any[] = []; // Stocke les catégories récupérées depuis le serveur


  constructor(
    private router: Router,
    private categoryService: CategoryService// Injecte le CategoryService pour obtenir les données des catégories
  ) {}

  ngOnInit() {
    console.log('on init...');
    this.categoryService.getCategory().subscribe(
      (result) => {
        this.listCategories = result; 
      }
      
    );
  }

  nouvelCategorie(): void {
    this.router.navigate(['nouvelleCategorie']); 
  }
  
}
