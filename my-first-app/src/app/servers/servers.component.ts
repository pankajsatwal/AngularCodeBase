import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer=false;
  // serverCreatedMessage='No Server Created!';
  serverName = 'TestServer'
  isServerCreated=false;
  servers = ['TestServer1','TestServer2']

  constructor() { 
    setTimeout(()=>{
      this.allowServer= true;
    },2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.servers.push(this.serverName);
    this.isServerCreated = true;
    // this.serverCreatedMessage='New server created! Sever name is:'+ this.serverName;
  }

}
