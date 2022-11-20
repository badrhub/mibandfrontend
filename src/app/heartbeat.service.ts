import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatService {
 
  constructor(private auth:AuthenticationService ,private clientService:ClientService, private _http:HttpClient) { }

  deleteHeartbeat(id: number) {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   // return this._http.delete(this.auth.getHost() + '/deleteClient/' +  d , {headers:h});
   return this._http.delete(this.auth.getHost() + '/deleteClient/' +  id);
  }

  getHeartbeats() {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   //  return this._http.get(this.auth.getHost() + '/listDemandes' ,{headers:h});
   return this._http.get(this.auth.getHost() + '/listClients' );
  }

  saveHeartbeat(h: any) {
   // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   //  return this._http.post(this.auth.getHost() + '/addProduitToDemande/'+d ,demandeproduit,{headers:h});
   return this._http.post(this.auth.getHost() + '/saveClient', h )
  }

  updateHeartbeat(url: any, h: any) {
    // let h = new HttpHeaders({'authorization':'Prefix ' + this.auth.jwt});
   // return this._http.put(this.auth.getHost() + '/updateDemande/' + url , d , {headers:h});
   return this._http.put(this.auth.getHost() + '/updateClient/' + url , h );
  }

  getHeartbeatsByClient(id: any) {
    return this.clientService.getHeartbeatsByClient(id);
  }

  getClientById(id:any){
    return this.clientService.getClientById(id);
  }
}
