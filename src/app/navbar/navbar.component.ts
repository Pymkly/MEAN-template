import { Component } from '@angular/core';
import {projectName} from '../../environments/environment'

@Component({
  selector: 'mean-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string = ''
  ngOnInit() {
    this.title = projectName;
  }
}
