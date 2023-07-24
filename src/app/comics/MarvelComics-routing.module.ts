import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SeriesPageComponent } from './pages/series-page/series-page.component';

/**
 * COnfiguramos las rutas hijas heredando en este caso el reactive que viene de app-routing.modue.ts
 */
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent },
      { path: 'Comics', component: HomePageComponent },
      { path: 'Series', component: SeriesPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelComicsRoutingModule { }
