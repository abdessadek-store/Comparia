// material.module.ts
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
// import other modules

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule
    // other modules
  ]
})
export class MaterialModule { }