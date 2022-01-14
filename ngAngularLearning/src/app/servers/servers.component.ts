import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is Created Yet';
  serverName='SummyServer';

  username='';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }

  onReset(){
    this.username='';
  }

  onCreateServer(){
    this.serverCreationStatus='Server is Created! Name is '+this.serverName;
  }

  onUpdateServerName(event:any){
    //console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
