import { MyBio } from './../../models/MyBio';
import { NgModule, Input, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';





// tslint:disable-next-line: no-unused-expression


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HeaderFooterModule {
  // @Input() author: MyBio;
  // author: MyBio;
}

