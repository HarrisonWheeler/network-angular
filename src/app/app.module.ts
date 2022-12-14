import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
