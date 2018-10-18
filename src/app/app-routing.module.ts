import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ArakComponent} from './arak/arak.component';
import {MasszazsokComponent} from './masszazsok/masszazsok.component';
import {RolamComponent} from './rolam/rolam.component';
import {HatmasszazsComponent} from './masszazsok/hatmasszazs/hatmasszazs.component';
import {TeljestestmasszazsComponent} from './masszazsok/teljestestmasszazs/teljestestmasszazs.component';
import {TestmasszazsComponent} from './masszazsok/testmasszazs/testmasszazs.component';
import {ArcmasszazsComponent} from './masszazsok/arcmasszazs/arcmasszazs.component';
import {TalpmasszazsComponent} from './masszazsok/talpmasszazs/talpmasszazs.component';
import {IrodaimaszazsComponent} from './masszazsok/irodaimaszazs/irodaimaszazs.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arak', component: ArakComponent},
  {
    path: 'masszazsok', component: MasszazsokComponent, children: [
      {path: 'hatmasszazs', component: HatmasszazsComponent},
      {path: 'teljestesmasszazs', component: TeljestestmasszazsComponent},
      {path: 'testmasszazs', component: TestmasszazsComponent},
      {path: 'arcmasszazs', component: ArcmasszazsComponent},
      {path: 'talpmasszazs', component: TalpmasszazsComponent},
      {path: 'irodaimasszazs', component: IrodaimaszazsComponent},
    ]
  },

  {path: 'rolam', component: RolamComponent},


  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
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
  ];

}
