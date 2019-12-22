import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule,
  MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatGridListModule, MatProgressBarModule, MatBadgeModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatProgressBarModule,
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
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class MaterialModule { }