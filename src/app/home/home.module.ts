import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatButton, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule
  ],
  declarations: [MainComponent, SideNavComponent],
  exports:[MainComponent,SideNavComponent],
  bootstrap:[MainComponent]
})
export class HomeModule { }
