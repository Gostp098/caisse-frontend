import { Component } from '@angular/core';
import { ClientService } from '../../../services/client/client.service'; 
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css',
  
})
export class ListClientComponent implements OnInit{
  listClients: any[] = []; // Stocke les clients récupérées depuis le serveur


  constructor(
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    console.log('on init...');
    this.clientService.getClient().subscribe(
      (result) => {
        this.listClients = result; 
      }
      
    );
  }
}
