import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {ArakComponent} from './arak/arak.component';
import {MasszazsokComponent} from './masszazsok/masszazsok.component';
import {RolamComponent} from './rolam/rolam.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arak', component: ArakComponent},
  {path: 'masszazsok', component: MasszazsokComponent},
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
    RolamComponent
  ];

}
