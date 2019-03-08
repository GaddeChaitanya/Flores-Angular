import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { DocumentsComponent } from '../documents/documents.component';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'documents',
    component: DocumentsComponent,
  },
  {
    path: 'step1',
    component: Step1Component,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'step2',
    component: Step2Component,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'step3',
    component: Step3Component,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  // Add AuthGuard to the providers array
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
