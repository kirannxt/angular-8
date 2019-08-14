import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './Layouts/layouts.module';
import { CommonModule } from '@angular/common';
import { TempleteDemoComponent } from './templete-demo/templete-demo.component';
import { FormsModule } from '@angular/forms';
//import { ServiceDemoService } from './myservice/service-demo.service';
import { MyserviceService } from './myservice.service';
import {MatSliderModule} from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';


// import { LayoutsComponent } from './layouts/layouts.component';
// import { AppHeaderComponent } from './layouts/app-header/app-header.component';
// import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
// import { AppSidebarComponent } from './layouts/app-sidebar/app-sidebar.component';
// import { IndexComponent } from './index/index.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    // ExDirectivesComponent,
    TempleteDemoComponent,
   
    
    
    // RouterDemoComponent,
    // TemplatestagsComponent,
    // ExPipesComponent,
    // LayoutsComponent,
    // AppHeaderComponent,
    // AppFooterComponent,
    // AppSidebarComponent,
    // IndexComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
