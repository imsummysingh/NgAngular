import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    //1- To receive query params and fragment
    //console.log(this.route.snapshot.queryParams);
    //console.log(this.route.snapshot.fragment);

    //2.To receive query params and fragment
    this.route.queryParams.subscribe((queryParms: Params)=>{
      this.allowEdit=queryParms['allowEdit']==='1'?true:false;
    });
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
