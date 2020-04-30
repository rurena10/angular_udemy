import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre: string
  correo: string
  password: string
}
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formularioCreado:FormGroup
  usuarios : Array<Usuario> = new Array<Usuario>()
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario()
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      nombre:['Ricardo', Validators.required],
      correo:['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password:['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  agregar(){
    this.usuarios.push(this.formularioCreado.value as Usuario)
    this.formularioCreado.reset
    //console.log(this.formularioCreado.value)
  }

}
