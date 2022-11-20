import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username?:string = "";

  constructor(private auth:AuthenticationService , private router:Router){
    this.username = this.auth.username;
    }
    
  ngOnInit(){
    this.auth.loadToken();
  }
  
  isAdmin(){
    return this.auth.isAdmin();
  }
  
  isAuthenticated(){
      this.username = this.auth.username;
    return this.auth.isAuthenticated();
  }
  logOut(){
    this.auth.logOut(); 
      this.router.navigate(["/home"]);
  }
  }
    
  