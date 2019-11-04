import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatBadgeModule, 
    MatCardModule,
    MatInputModule,
    MatTooltipModule
  } from '@angular/material';

const Components = [
  AppComponent,
  HeaderComponent,
  SidenavComponent
];

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
