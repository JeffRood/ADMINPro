
// MODULOS!!!
import { NgModule } from '@angular/core';
import { PagesModule } from '../pages/pages.module';

// RUTAS!!!
import { APP_ROUTES } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// COMPONENTES!!!
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent
  ]
})
export class SharedModule {}
