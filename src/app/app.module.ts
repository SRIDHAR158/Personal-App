import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from './material.module';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SidebarComponent} from './sidebar/sidebar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FuelLogComponent } from './fuel-log/fuel-log.component';
import { TableComponent } from './table/table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { NewFuelComponent } from './new-fuel/new-fuel.component';
import { TableService } from './services/api/table.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    TopHeaderComponent,
    FuelLogComponent,
    TableComponent,
    NewFuelComponent,
  ],
  entryComponents: [NewFuelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    //MatTableDataSource,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
