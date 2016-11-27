import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavComponent }  from './app.nav.component';
import { HeaderComponent }  from './app.header.component';
import { SectionListComponent }  from './app.section.list.component';
import { DownloadComponent }  from './app.section.downloads.component';
import { FeaturesComponent }  from './app.section.features.component';
import { CtaComponent }  from './app.section.cta.component';
import { ContactComponent }  from './app.section.contact.component';
import { FooterComponent }  from './app.footer.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavComponent, HeaderComponent, SectionListComponent, DownloadComponent, FeaturesComponent, 
  CtaComponent, ContactComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
