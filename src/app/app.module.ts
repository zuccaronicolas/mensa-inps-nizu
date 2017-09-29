import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MenuModule } from './menu/menu.module';
import { DataPersistanceService } from './data-persistance.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    MenuModule
  ],
  providers: [DataPersistanceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
