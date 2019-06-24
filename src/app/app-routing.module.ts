import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path: '', redirectTo: 'theme', pathMatch: 'full'},
  {path: 'theme', component: ThemeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
