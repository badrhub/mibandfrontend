import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private auth:AuthenticationService , private _http:HttpClient) { }

  addClient(d: any) {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   //  return this._http.post(this.auth.getHost() + '/addProduitToDemande/'+d ,demandeproduit,{headers:h});
   return this._http.post(this.auth.getHost() + '/saveClient', d )
  }

  getClients() {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   //  return this._http.get(this.auth.getHost() + '/listDemandes' ,{headers:h});
   return this._http.get(this.auth.getHost() + '/listClients' );
  }

  getHeartbeatsByClient(currentClient: any) {
    //let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
  //  return this._http.get(this.auth.getHost() + '/listProduitsParDemande/'+currentClient ,{headers:h});
    return this._http.get(this.auth.getHost() + '/getHeartbeatsByClient/'+currentClient );
  }
  
  updateClient(url: any, d: any) {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   // return this._http.put(this.auth.getHost() + '/updateDemande/' + url , d , {headers:h});
   return this._http.put(this.auth.getHost() + '/updateClient/' + url , d );
  }

  deleteClient(d: any) {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   // return this._http.delete(this.auth.getHost() + '/deleteClient/' +  d , {headers:h});
   return this._http.delete(this.auth.getHost() + '/deleteClient/' +  d);
  }

  deleteHeartBeatFromClient(d: string,p: string){
    // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   // return this._http.delete(this.auth.getHost() + '/deleteHeartBeatFromClient/' +  d +'/'+p, { headers:h});
   return this._http.delete(this.auth.getHost() + '/deleteHeartBeatFromClient/' +  d +'/'+p);
  }

  getClientById(id:any){
      //let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
  //  return this._http.get(this.auth.getHost() + '/listProduitsParDemande/'+currentClient ,{headers:h});
  return this._http.get(this.auth.getHost() + '/getClientById/'+id );
  } 


}
