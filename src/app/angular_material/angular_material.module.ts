import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule,
         MatInputModule,
         MatFormFieldModule,
         MatMenuModule,
         MatRadioModule,
         MatTableModule,
         MatPaginatorModule
  } from '@angular/material';

@NgModule({

  imports: [
      MatButtonModule,
     MatCheckboxModule,
     MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule

 ],
  exports: [
    MatButtonModule,
     MatCheckboxModule,
     MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule

  ]
})
export class AngularMaterialModule { }
