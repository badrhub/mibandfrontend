import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgPipesModule} from 'ngx-pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PipeClient } from './client/client.pipe';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HeartbeatPipe } from './heartbeat/heart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeartbeatComponent,    
    PipeClient,HeartbeatPipe, PageNotFoundComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgPipesModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
