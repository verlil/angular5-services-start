import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
  //providers: [LoggingService]  - this tels Angular how to provide(create) an instance of LoggingService
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor (private loggingService: LoggingService){
    //private loggingService: LoggingService  - this informs  we need an instance of LoggingService
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
