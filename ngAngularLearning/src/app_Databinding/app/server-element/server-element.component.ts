import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element:{type:string, name:string, content:string};  //exposing this property to the world

  constructor() { }

  ngOnInit(): void {
  }

}
