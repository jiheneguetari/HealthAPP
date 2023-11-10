import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyProgramComponent } from './components/my-program/my-program.component';
import { NutritionistComponent } from './components/nutritionist/nutritionist.component';
import { CoatchesComponent } from './components/coatches/coatches.component';

const routes: Routes = [
  {path: '' , component :HomeComponent },
  {path: 'home' , component :HomeComponent},
  {path: 'login' , component :LoginComponent },
  {path: 'inscription' , component :InscriptionComponent},
  {path: 'about' , component :AboutComponent },
  {path: 'contact' , component :ContactComponent },
  {path: 'program' , component :MyProgramComponent},
  {path: 'nutrisionist' , component :NutritionistComponent },
  {path: 'coatch' , component :CoatchesComponent },
  {path: 'program' , component :MyProgramComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
