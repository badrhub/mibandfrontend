import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HeartbeatService } from '../heartbeat.service';
import { Heartbeat } from './Heartbeat';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.css']
})
export class HeartbeatComponent implements OnInit {

  id?:number;
  public filter: string = '';
  heartbeats: Heartbeat[] = [];
  errr?: string;
  currentHeartbeat: any;
  currentClient: any;
  mode: string = "list";
  public page = 1;
  public pageSize = 10;
  p: string|number|undefined;

  constructor(private service:HeartbeatService,private auth:AuthenticationService, private router:Router, private route: ActivatedRoute){
    if(!this.auth.isAuthenticated()){
    //  this.router.navigate(["/login"]);
    }
   
   // for (let i = 1; i <= 100; i++) {
   //   var h =new Heartbeat();
   //   h.id =  i;
   //   h.value =  i + 5;
   //   var t = new Date();
   //   h.date_prelevement = ""+ t.toISOString().replace('T',' ').replace('Z','');
   //   this.heartbeats.push(h);
   // }

  }

/******************************** */

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
      }
    )
    this.route.params.subscribe((params: Params) => this.id = params['id']);
    this.getHeartbeatsByClient(this.id);
    this.getClientById(this.id);
  }

/******************************** */
getHeartbeats() {
    this.service.getHeartbeats()
      .subscribe((x: any) =>{
         this.heartbeats= x;
         this.errr ="";
      } , y =>{
        console.log(y);
      });
  }
   
/******************************** */
editHeartbeat(d: any){
  this.currentHeartbeat= d;
  this.mode = 'edit';
  this.errr="";
}

  /******************************** */

  addHeartbeat(){
    this.mode = "add";
    this.errr="";
  }

  /******************************** */
cancelAdd(){
  this.getHeartbeats();
  this.mode = "list";
}

/******************************** */

  deleteHeartbeat(h: any){
    let c = confirm('sûre de vouloir supprimer  ?')
    if(c){
      this.service.deleteHeartbeat(h.id)
      .subscribe((x:any) =>{
        if(x== null){
          this.errr = "Le heartbeat << "+h.id+" >> n'est pas supprimé !!!!!!!!!!!";
          this.mode ="list";
        }else{
          this.heartbeats=x;
          this.mode ="list";
           this.errr = "Le heartbeat << "+h.id+" >> a été supprimé avec succès";
        }      
      } , (y: { error: { message: string | undefined; }; }) =>{
        console.log(y);
        this.errr = y.error.message;
          });
   }
  }

  /******************************** */

  saveHeartbeat(h:any){
    this.service.saveHeartbeat(h)
    .subscribe((x: any) =>{
    this.heartbeats = x;
    this.mode ="list";
    this.errr = h.value + " est ajouté avec succès";
  } , (y: { error: { message: any; }; }) =>{
      console.log(y);
      this.errr = y.error.message;
  });
  }

  /******************************** */

  updateHeartbeat(c:any){
    let url = this.currentHeartbeat.id;
    this.service.updateHeartbeat(url , c)
      .subscribe((x: any) =>{
        if(x== null){
          this.errr = "Le Heartbeat << "+c.value+" >> n'est pas mis à jour !!!!!!!!!!!";
          this.mode ="list";
        }else{
          this.heartbeats = x;
          this.errr = c.value + " est modifié avec succès";
         this.mode = "list";
        } 
    } , (y: { error: { message: any; }; }) =>{
    console.log(y);
    this.errr = y.error.message;
    });
  }

  /******************************** */

  return(){
    this.router.navigate(["clients"]);
  }

    /******************************** */

    getHeartbeatsByClient(id: any) {
      this.service.getHeartbeatsByClient(id)
      .subscribe((x: any) =>{
         this.heartbeats= x;
         this.errr ="";
      } , y =>{
        console.log(y);
      });
    }  

     /******************************** */

    getClientById(id: any) {
      this.service.getClientById(id)
      .subscribe((x: any) =>{
         this.currentClient= x;
         this.errr ="";
      } , y =>{
        console.log(y);
      });
    }  

}
