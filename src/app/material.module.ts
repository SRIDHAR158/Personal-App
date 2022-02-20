import { NgModule } from '@angular/core';


import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
  
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [MatIconModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableDataSource, MatSortModule, MatCheckboxModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule],
  exports: [
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableDataSource,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
