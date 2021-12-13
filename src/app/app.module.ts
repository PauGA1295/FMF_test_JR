import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]

})

export class AppModule { }
