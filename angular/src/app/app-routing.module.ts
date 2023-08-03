import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MadComponent } from './mad/mad.component';
import { SadComponent } from './sad/sad.component';
import { GladComponent } from './glad/glad.component';

const routes: Routes = [
  { path: 'mad', component: MadComponent },
  { path: 'sad', component: SadComponent },
  { path: 'glad', component: GladComponent },
  { path: '', redirectTo: '/mad', pathMatch: 'full' }, // Ana sayfa için mad bileşenine yönlendiriyoruz.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
