import { FooterComponent } from './modules/header-footer/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { HeaderFooterModule } from './modules/header-footer/header-footer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaoComponent } from './dao/dao.component';
import { HeaderComponent } from './modules/header-footer/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
