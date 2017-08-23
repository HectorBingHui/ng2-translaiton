import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translation demo';
  clientLnag: string;
  zhColor: string;
  enColor: string;
  zhOpacity: number;
  enOpacity: number;

  constructor(
    private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    this.clientLnag = translate.getBrowserLang();

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.clientLnag);

  }

  langZh() {
    this.translate.use('zh');
    this.enColor = "black";
    this.zhColor = "white";
    this.zhOpacity = 0.5;
    this.enOpacity = 1; 
  }

  langEn() {
    this.translate.use('en');
    this.zhColor = "black";
    this.enColor = "white";
    this.enOpacity = 0.5;
    this.zhOpacity = 1;
  }
}
