import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {CollapseModule} from 'ngx-bootstrap';
import {ArakComponent} from './arak/arak.component';
import {MasszazsokComponent} from './masszazsok/masszazsok.component';
import {RolamComponent} from './rolam/rolam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ArakComponent,
    MasszazsokComponent,
    RolamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
