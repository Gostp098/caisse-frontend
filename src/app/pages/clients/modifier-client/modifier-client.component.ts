import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client/client.service';
import { client } from '../client';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrl: './modifier-client.component.css'
})



export class ModifierClientComponent implements OnInit {
  
 
  client!: any;
  clientId!: any;

 


  constructor(
   private router:Router,
   private clientService: ClientService,
   private route: ActivatedRoute,
  ){ }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
     //alert(this.clientId);
    }
  
  cancel():void {
    this.router.navigate(['caissier-dashboard/client']);
  }


  modifierClient() {
    
 }   
}



