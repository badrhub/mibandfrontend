import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private auth:AuthenticationService , private _http:HttpClient) { }

  addClient(d: any) {
      return this._http.post(this.auth.getHost() + '/saveClient', d , {responseType: 'text'})
  }

  updateClient(url: any, d: any) {
    return this._http.put(this.auth.getHost() + '/updateClient/' + url , d ,{responseType: 'text'} );
   }

  getClients() {
   return this._http.get(this.auth.getHost() + '/listClients' );
  }

  getHeartbeatsByClient(currentClient: any) {
    return this._http.get(this.auth.getHost() + '/getHeartbeatsByClient/'+currentClient );
  }
  
 
  deleteClient(d: any) {
   return this._http.delete(this.auth.getHost() + '/deleteClient/' +  d, {responseType: 'text'});
  }

 // deleteHeartBeatFromClient(d: string,p: string){
  // return this._http.delete(this.auth.getHost() + '/deleteHeartBeatFromClient/' +  d +'/'+p);
  //}

  getClientById(id:any){
  return this._http.get(this.auth.getHost() + '/getClientById/'+id );
  } 


}
