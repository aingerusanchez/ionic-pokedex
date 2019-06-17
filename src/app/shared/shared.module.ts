import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// SERVICES
import { UtilsService } from './utils.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UtilsService,
  ],
  providers: [],
  exports: [
    UtilsService,
  ],
})
export class SharedModule { }
