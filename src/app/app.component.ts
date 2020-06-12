import { Component } from '@angular/core';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notificaciones';

  constructor(private notifyService : NotificationService) { }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "Notificación")
  }

  showToasterError(){
      this.notifyService.showError("Something is wrong", "Notificación")
  }

  showToasterInfo(){
      this.notifyService.showInfo("This is info", "Notificación")
  }

  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "Notificación")
  }
}
