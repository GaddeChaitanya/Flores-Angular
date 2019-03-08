import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsremoveElement = true;
  IsHideFeedbackForm = true;
  routes: any[];
  constructor(private router: Router) {
    this.routes = ['/step1', '/step2', '/step3', '/documents', '/fqas', 'contact'];
    if (this.routes.indexOf(this.router.url) === -1) {
      this.IsremoveElement = false;
      console.log('URL :' + this.router.url);
    } else {
    console.log('URL :' + this.router.url);
      this.IsremoveElement = true;
    }
  }
  openFeedbackForm() {
    console.log('Button :' + this.IsHideFeedbackForm);
    this.IsHideFeedbackForm = false;
    console.log('Button :' + this.IsHideFeedbackForm);
  }
}
