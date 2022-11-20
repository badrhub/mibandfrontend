import { Pipe, PipeTransform } from "@angular/core"
import { Client } from "./Client";


@Pipe(
    {name: 'clientPipe'}
    )
export class PipeClient implements PipeTransform{

    transform(clients:Client[], filterText: String) {
       if(clients.length === 0 || filterText === ''){
        return clients;
       }else{
        return clients.filter((client) =>{
          return client.name.toLowerCase() === filterText.toLowerCase();
        })
       }
    }
    

}