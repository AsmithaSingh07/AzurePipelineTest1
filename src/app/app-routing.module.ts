import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByeComponent } from './Bye/Bye.component';
import { WelcomeComponent } from './Welcome/Welcome.component';


const routes: Routes = [{path:'Welcome',component: WelcomeComponent},
{path:'',component: WelcomeComponent,pathMatch:'full'},
{path:'Bye',component:ByeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
