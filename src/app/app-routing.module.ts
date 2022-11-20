import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"clients" , component:ClientComponent},
  {path:"heartbeats/:id" , component:HeartbeatComponent},
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } 
    
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
