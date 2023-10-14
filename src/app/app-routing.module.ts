import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './compilers/java/java.component';
import { PythonComponent } from './compilers/python/python.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'java', component: JavaComponent },
  { path: 'python', component: PythonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
