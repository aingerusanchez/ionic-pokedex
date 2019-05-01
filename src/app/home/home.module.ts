import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
// Componentes externos que realizan peticiones
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// Configuración de traducción
import { customTranslateLoader } from '../app.module';

// Pages
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [HomePage],
})
export class HomePageModule { }
