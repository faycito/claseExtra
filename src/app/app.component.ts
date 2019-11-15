import { Component } from '@angular/core';

import { Alumno } from './models/alumno.model';
import { Profesor } from './models/profesor.model';
import { Nota } from './models/nota.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'claseExtra';
  alumnos: Alumno[] = [
    {
      id:'ALM001',
      nombre:'Javier',
      edad: 22,
      idProfesor: ['PROF001','PROF002'],
      idNota: ['NOT001', 'NOT002']
    },
    {
      id:'ALM002',
      nombre:'Ana',
      edad: 23,
      idProfesor: ['PROF001'],
      idNota: ['NOT003', 'NOT004']
    },
    {
      id:'ALM003',
      nombre:'David',
      edad: 25,
      idProfesor: ['PROF001','PROF002'],
      idNota: ['NOT005', 'NOT006']
    },
    {
      id:'ALM004',
      nombre:'Daniela',
      edad: 24,
      idProfesor: ['PROF002'],
      idNota: ['NOT007', 'NOT008']
    }
  ]
  profesores: Profesor[] = [
    {
      id:'PROF001',
      nombre:'Ismael',
      especialidades:['Full-stack', 'Angular'],
      estudiantes: ['ALM001','ALM002','ALM003','ALM004']
    },
    {
      id:'PROF001',
      nombre:'Freddy',
      especialidades:['iOS', 'Mobile'],
      estudiantes: ['ALM001','ALM002','ALM003','ALM004']
    }
  ];
  notas: Nota[] = [
    {
      id:'NOT001',
      nota:18
    },
    {
      id:'NOT002',
      nota:19
    },
    {
      id:'NOT003',
      nota:14
    },
    {
      id:'NOT004',
      nota:15
    },
    {
      id:'NOT005',
      nota:16
    },
    {
      id:'NOT006',
      nota:10
    },
    {
      id:'NOT007',
      nota:18
    },
    {
      id:'NOT008',
      nota:16
    },
  ]

  public getProfesor(idProfesor: string): string{
    let data = this.profesores.find(profesor => profesor.id === idProfesor)
    if(data)
    return data.nombre;
    return 'no existe docente'
  }

  public getNota(idNota: string): number{
    let data = this.notas.find(nota => nota.id === idNota);
    if(data)
    return data.nota;
    
  }
  public getAlumno(idAlumno: string): string{
    let data = this.alumnos.find(alumno => alumno.id === idAlumno);
    if(data)
    return data.nombre;
    
  }
}
