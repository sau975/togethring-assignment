import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SidebarModule } from 'primeng/sidebar';
import { FilterPipe } from './pipes/filter.pipe';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TieredMenuModule,
    SidebarModule,
    PickerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TieredMenuModule,
    SidebarModule,
    FilterPipe,
    PickerModule
  ]
})
export class SharedModule { }
