import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { TemplatestagsComponent } from './templatestags/templatestags.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { MaterialsDemoComponent } from './materials-demo/materials-demo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ExDirectivesComponent } from './ex-directives/ex-directives.component';
import { LayoutsComponent } from './Layouts/layouts.component';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './example/crud/crud.component';
import { CurdPostComponent } from './example/curd-post/curd-post.component';
import { CurdGetComponent } from './example/curd-get/curd-get.component';
import { CurdPutComponent } from './example/curd-put/curd-put.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { ComponentsComponent } from './Components/Components.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';



const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'Login', component:LoginComponent},
 { path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
  "path":"",
        "component":LayoutsComponent,
        "children":[
           {
    path:'Home',
    component:IndexComponent,

  },{
  path:'Components',
  component:ComponentsComponent
},
{
  path:'directives',
  component:ExDirectivesComponent
},
{
  path:'Modules',
  component:ModuleComponent
},
{
  path:'Data-Binding',
  component:DataBindingComponent
},
{
  path:'Event-Binding',
  component:EventComponent
},
{
  path:'Pipes-Ex',
  component:ExPipesComponent
},
{
  path:'templates',
  component:TemplatestagsComponent
},
{
  path:'routersnew',
  component:RouterDemoComponent
},
{
  path:'formsnew',
  component:TempFormComponent
},
{
  path:'templateDriven',
  component:TemplateDrivenFormComponent
},
{
  path:'reactiveforms',
  component:ReactiveFormComponent
},
{
  path:'materialnew',
  component:MaterialsDemoComponent
},
{
  path:'serivcenew',
  component:ServicesDemoComponent
},
{
  path:'httpDemo',
  component:HttpDemoComponent
},
{
  path:'curd',
  component:CrudComponent
},
{
  path:'curd-post',
  component:CurdPostComponent
},
{
  path:'curd-put/:id',
  component:CurdPutComponent
},
{
  path:'curd-get',
  component:CurdGetComponent
},
]
}
];

@NgModule({
  declarations:[
    ComponentsComponent,
    DataBindingComponent,
    ModuleComponent,
    IndexComponent,
    ExDirectivesComponent,
    ExPipesComponent,
    TemplatestagsComponent,
    RouterDemoComponent,
    TemplateDrivenFormComponent,
    TempFormComponent,
    ReactiveFormComponent,
    ServicesDemoComponent,
    HttpDemoComponent,
    MaterialsDemoComponent,
    CrudComponent,
    CurdPostComponent,
    CurdGetComponent,
    CurdPutComponent,
    EventComponent,
    LoginComponent,
    
    // AppComponent
  ],
   imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
