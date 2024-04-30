import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrl: './page-categorie.component.css'
})
export class PageCategorieComponent  implements OnInit {

  constructor ( 
    private router :Router
  ) {}


  ngOnInit(): void {
    }


  nouvelCategorie():void{
    this.router.navigate(['nouvelleCategorie']);

}
}