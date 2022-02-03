import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UserService{

    //event emitter approach
    // activatedEmitter= new EventEmitter<boolean>();

    //subject approach
    activatedEmitter = new Subject<boolean>();
}