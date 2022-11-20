import { Pipe, PipeTransform } from "@angular/core";
import { Heartbeat } from "./Heartbeat";

@Pipe(
    {name: 'HeartbeatPipe'}
    )
export class HeartbeatPipe implements PipeTransform{

    transform(heartbeats:Heartbeat[], filterText: String) {
       if(heartbeats.length === 0 || filterText === ''){
        return heartbeats;
       }else{
        return heartbeats.filter((h) =>{
          return h.id  === Number(filterText);
        })
    }
}

}