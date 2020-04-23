import { Component, OnInit } from '@angular/core';
import {Professor} from '../../model/professor';
import {Materia} from '../../model/materia';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [
  ]
})
export class ListagemComponent implements OnInit {

  constructor() { }
  public professores = [
    new Professor(1, 'Ronaldo Fenômeno', "4"),
    new Professor(2, 'Rivaldo', "3"),
    new Professor(3, 'Roberto Carlos', "2"),
    new Professor(4, 'Ronaldinho Gaucho', "1"),
    new Professor(5, 'Denilson Show', "2")
  ];
  public materias = [
    new Materia(1, 'Matemática', "1"),
    new Materia(2, 'Português', "1"),
    new Materia(3, 'História', "2"),
    new Materia(4, 'Geografia', "1"),
    new Materia(5, 'Educação Física', "1"),
    new Materia(6, 'Artes', "1"),
    new Materia(7, 'Filosofia', "1"),
    new Materia(8, 'Sociologia', "1"),
    new Materia(9, 'Biologia', "1"),
    new Materia(10, 'Física', "1"),
    new Materia(11, 'Lógica de Programação', "0")
  ];

  ngOnInit(): void {
  }

}
