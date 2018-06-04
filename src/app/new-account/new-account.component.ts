import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
  //providers: [LoggingService]  - this tels Angular how to provide(create) an instance of LoggingService
})
export class NewAccountComponent {

  constructor (private loggingService: LoggingService, private accountsService: AccountsService){
    //private loggingService: LoggingService  - this informs  we need an instance of LoggingService
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus);
  }
}
