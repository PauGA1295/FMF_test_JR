import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import {generos} from '../../data/generos';
import {clubes} from '../../data/clubes';
import {nacionalidades} from '../../data/nacionalidades';
import {MyValidations} from '../../utils/validations';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  step: any;
  form: FormGroup = new FormGroup({});
  generos: any[]= generos;
  clubes: any[]= clubes;
  nacionalidades: any[]= nacionalidades;

  constructor(private FormBuilder: FormBuilder) {
    this.buildForm();
    //this.downloadPDF();
   }
   public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }

  ngOnInit(): void {


  }


  private buildForm(): void{
    this.form = this.FormBuilder.group({
      nombre: ['', [Validators.required]],
      ap: ['', [Validators.required]],
      am: ['', [Validators.required]],
      fnac: ['', MyValidations.joven],
      genero: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      club: ['', [Validators.required]],
      rfc: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
    });
//    this.form.valueChanges.subscribe(value => {console.log})
  }


  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }
  }
}
