import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from "./second-component/second-component.component";
import { StudentComponent } from './Student/student-list/student-list.component';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponentComponent, StudentComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public accountService: AccountService){}
  title = 'Angular Task';

  login()
  {
    this.accountService.login("admin","123");
  }

  logout()
  {
    this.accountService.logout();
  }
}
