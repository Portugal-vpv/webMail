import { SideNavItensModule } from './../side-nav-itens/side-nav-itens.module';
import { MaterialModule } from './../../material/material.module';
import { SideNavBarComponent } from './side-nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [SideNavBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SideNavItensModule
  ],
  exports: [SideNavBarComponent],
})
export class SideNavBarModule { }
