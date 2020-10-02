import { SideNavItensModule } from './components/side-nav-itens/side-nav-itens.module';
import { SideNavBarModule } from './components/side-nav-bar/side-nav-bar.module';
import { RegisterModule } from './components/register/register.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './components/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SideNavItensComponent } from './components/side-nav-itens/side-nav-itens.component';





@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    RegisterModule,
    SideNavBarModule,
    SideNavItensModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
