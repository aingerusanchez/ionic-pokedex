import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsService } from './utils.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UtilsService,
  ],
  providers: [UtilsService],
  exports: [
    UtilsService,
  ],
})
export class SharedModule { }
