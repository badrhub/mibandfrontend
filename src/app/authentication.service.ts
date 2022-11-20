import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

      //     host1:string = "http://materiel.dtr.net:8080/demandes" ; 
           //    host2:string = "http://materiel.dtr.net:8080/auth" ; 
    
           host1:string = "http://localhost:8088"; 
           host2:string = "http://localhost:8080";

        //    host1:string = "https://localhost/demandes"; 
        //    host2:string = "https://localhost/auth";

   jwt?: string; 
   username?: string;
   roles?: Array<string>; 
   constructor(private http:HttpClient ) { }

  login(data: any){
     return this.http.post(this.host2 + "/login",data ,{observe:'response'});
   }

   getHost(){
    return this.host1;
   }

    gethost(){
       return this.host2;
   }
   saveToken(jwt: string){
    localStorage.setItem('token' ,jwt);
    this.jwt = jwt;
    this.parseJWT();
   }
   parseJWT(){
   let jwtHelper = new JwtHelperService();
   if(this.jwt != null && this.jwt != undefined){
   let jwtObject = jwtHelper.decodeToken(this.jwt);
   this.username = jwtObject.sub;
   this.roles = jwtObject.roles;
   }
   }

   isAdmin(){
    return this.roles!.indexOf('ADMIN')>=0 !;
   }

  isAuthenticated(){
    return this.roles && this.isAdmin() ;
   }

   loadToken(){
   this.jwt=localStorage.getItem('token')!;
   this.parseJWT();
   }

   logOut(){
   localStorage.removeItem('token');
   this.jwt=undefined;
   this.username=undefined;
   this.roles=undefined;
   //window.location.replace('/');
   }

   connected(){
      //this.http.get(this.host2 + "/connected",{headers:this.jwt});
   }
}


