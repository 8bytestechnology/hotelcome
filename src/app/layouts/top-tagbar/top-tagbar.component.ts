import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-top-tagbar',
  templateUrl: './top-tagbar.component.html',
  styleUrls: ['./top-tagbar.component.scss']
})
export class TopTagbarComponent {

  country: any;
  selectedItem!: any;

  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;
  userData: any;

  constructor(public languageService: LanguageService, public _cookiesService: CookieService) { }
  
  ngOnInit(): void {
    
    // top-tagbar current time
    // setInterval(() => {
      // date
      var d = new Date();
      var dateOptions = { weekday: 'short', month: 'short', dateStyle: 'short' };
      var date = d.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      // time
      var hours = d.getHours();
      var ampm = hours >= 12 ? ' PM' : ' AM';
      var hours = hours % 12;
      var time = ("0" + hours).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ampm;

      var showdate = document.getElementById('current-time') as HTMLAreaElement;
      showdate.innerHTML = date + " | " + time;
    // }, 0)


    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
      this.countryName = 'English'
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }


   /***
   * Language Listing
   */
   listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'sp' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'gr' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
    { text: 'Arabic', flag: 'assets/images/flags/ae.svg', lang: 'ar' },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
}
