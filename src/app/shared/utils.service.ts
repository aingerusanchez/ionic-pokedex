import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

// TSLint file rules:
// tslint:disable: no-floating-promises

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  private isLoading: boolean;

  constructor(
    public loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    this.isLoading = false;
  }

  public showLoader = (msg: string) => {
    this.isLoading = true;
    // tslint:disable-next-line: no-floating-promises
    this.loadingCtrl.create({
      message: msg || this.translate.instant('CARGANDO'),
    }).then(res => res.present()
      .then(() => { if (!this.isLoading) { res.dismiss(); } }));
  }

  public hideLoader = async () => {
    this.isLoading = false;
    this.loadingCtrl.dismiss();
  }
}
