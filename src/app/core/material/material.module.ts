import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,
  MatCheckboxModule,
   MatSidenavModule, MatListModule , MatGridListModule,MatBadgeModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSidenavModule, MatListModule ,
    MatGridListModule,
    MatBadgeModule
    ],
    exports: [
    CommonModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatIconModule,
     MatProgressSpinnerModule,
     MatCheckboxModule,
     MatSidenavModule, MatListModule ,
     MatGridListModule,
     MatBadgeModule
     ],
})
export class MaterialModule { }
