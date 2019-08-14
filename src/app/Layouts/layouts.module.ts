import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LayoutsComponent } from './/layouts.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppBannerComponent } from './app-banner/app-banner.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent,
    AppBannerComponent
  ],
  exports:[
    LayoutsComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
