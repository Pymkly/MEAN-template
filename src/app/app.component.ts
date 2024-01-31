import { Component } from '@angular/core';
import { TestService } from './test/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mean-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = '🎉 Client app is running! 🎉';
  name = 'Joe'
  constructor (private tService: TestService, public router: Router) {

  }

  public gettService(): TestService {
    return this.tService;
  }
  public get currentDate() : number {
    return new Date().getFullYear();
  }

  changeName() {
    this.name = "Jane";
  }

  isLogin() {
    return this.router.url == "/login" || this.router.url == "/";
  }

}
