import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ClientService } from '../client.service';
import { Client } from './Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public filter: string = '';
  clients: Client[] = [];
  errr?: string;
  currentClient: any;
  mode: string = "list";
  public page = 1;
  public pageSize = 10;
  p: string|number|undefined;

  constructor(private service:ClientService,private auth:AuthenticationService, private router:Router){
    if(!this.auth.isAuthenticated()){
    //  this.router.navigate(["/login"]);
    }

   // for (let i = 1; i <= 100; i++) {
   //   var c =new Client();
     // c.id = ' key ' + i;
     // c.name = 'nom du client ' + i;
    //  this.clients.push(c);
   // }
  }

  ngOnInit(): void {
    this.getClients();
  }

  
  /**************************** */
  deleteClient(p: Client){
    let c = confirm('sûre de vouloir supprimer  ?')
  if(c){
    this.service.deleteClient(p.id)
    .subscribe((x:any) =>{
      if(x== null){
        this.errr = "Le client << "+p.nom+" >> n'est pas supprimé !!!!!!!!!!!";
        this.mode ="list";
      }else{
        this. getClients();
        this.mode ="list";
         this.errr = "Le client << "+p.nom+" >> a été supprimé avec succès";
      }      
    } , y =>{
      console.log(y);
      this.errr = y.error.message;
        });
 }
  }
      /******************************** */
  getClients() {
    this.service.getClients()
      .subscribe((x: any) =>{
        console.log(x);
         this.clients = x;
      } , y =>{
        console.log(y);
      });
  }
   
/******************************** */
editClient(d: any){
  this.currentClient= d;
  this.mode = 'edit';
  this.errr="";
}

/******************************** */
addClient(){
  this.mode = "add";
  this.errr="";
}

/******************************** */
saveClient(d: Client){
  this.service.addClient(d)
  .subscribe((x: any) =>{
  this. getClients();
  this.mode ="list";
  this.errr = d.nom + " est ajouté avec succès";
} , (y: { error: { message: any; }; }) =>{
    console.log(y);
    this.errr = y.error.message;
});
}

/******************************** */
cancelAdd(){
  this.getClients();
  this.mode = "list";
}

/******************************** */
updateClient(d: { name: string; }){
    let url = this.currentClient.id;
    this.service.updateClient(url , d)
      .subscribe((x: any) =>{
        if(x== null){
          this.errr = "Le client << "+d.name+" >> n'est pas mis à jour !!!!!!!!!!!";
          this.mode ="list";
        }else{
         this. getClients();
          this.errr = d.name + " est modifié avec succès";
         this.mode = "list";
        } 
    } , (y: { error: { message: any; }; }) =>{
    console.log(y);
    this.errr = y.error.message;
    });
}

/******************************** */

viewClient(c:any){
  this.router.navigate(["heartbeats", c]);
}


}
