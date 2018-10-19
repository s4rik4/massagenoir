import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {ArakComponent} from './arak/arak.component';
import {MasszazsokComponent} from './masszazsok/masszazsok.component';
import {RolamComponent} from './rolam/rolam.component';
import {HatmasszazsComponent} from './masszazsok/hatmasszazs/hatmasszazs.component';
import {TestmasszazsComponent} from './masszazsok/testmasszazs/testmasszazs.component';
import {TeljestestmasszazsComponent} from './masszazsok/teljestestmasszazs/teljestestmasszazs.component';
import {TalpmasszazsComponent} from './masszazsok/talpmasszazs/talpmasszazs.component';
import {IrodaimaszazsComponent} from './masszazsok/irodaimaszazs/irodaimaszazs.component';
import {ArcmasszazsComponent} from './masszazsok/arcmasszazs/arcmasszazs.component';

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
    RolamComponent,
    HatmasszazsComponent,
    TestmasszazsComponent,
    TeljestestmasszazsComponent,
    TalpmasszazsComponent,
    IrodaimaszazsComponent,
    ArcmasszazsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
