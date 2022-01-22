import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accout.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService){
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert('New Status: '+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);



    //this.loggingService.logStatusChange(accountStatus);

    //creating instance of service manually
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
