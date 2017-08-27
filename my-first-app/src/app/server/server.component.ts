import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
allowServer = true;
serverOnOff = false;
serverStatus = 'No server Created';
serverSays: string = 'online';
serverName = '';
servers = ['testserver'];
constructor(){
    this.serverSays = Math.random() > 0.5 ? 'online' : 'offline'
    setTimeout(()=>{
        this.allowServer=false;
    },2000);
}
onCreateServer(){
    this.serverOnOff = true;
    this.servers.push(this.serverName);
    this.serverStatus = 'Server Created';
}
getColor(){
    return this.serverSays === 'online' ? 'green' : 'red';
}

} 