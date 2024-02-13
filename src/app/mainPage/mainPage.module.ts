// mainPage.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './mainPage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MatTabsModule, MatButtonModule,FormsModule],
  
})
export class mainPageModule {}
