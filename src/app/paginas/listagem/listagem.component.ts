import { Component, OnInit } from '@angular/core';
import {Professor} from '../../model/professor';
import {Materia} from '../../model/materia';
import {ProfessorPorMateria} from '../../model/professorPorMateria';
import {profMaterias} from '../../model/profMaterias';
import {materiaPorProfessor} from '../../model/materiaPorProfessor';
import {matProfessores} from '../../model/matProfessores';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [
  ]
})
export class ListagemComponent implements OnInit {

  constructor() { }
  public profPorMateria = [
    new ProfessorPorMateria(1, 'Matemática'),
    new ProfessorPorMateria(1, 'História'),
    new ProfessorPorMateria(1, 'Geografia'),
    new ProfessorPorMateria(1, 'Português'),
    
    new ProfessorPorMateria(2, 'História'),
    new ProfessorPorMateria(2, 'Física'),
    new ProfessorPorMateria(2, 'Artes'),
    
    new ProfessorPorMateria(3, 'Filosofia'),
    new ProfessorPorMateria(3, 'Sociologia'),
    
    new ProfessorPorMateria(4, 'Biologia'),
    
    new ProfessorPorMateria(5, 'Física'),
    new ProfessorPorMateria(5, 'Educação Física')
  ];


  public matPorProfessores = [
    new materiaPorProfessor(1, 'Ronaldo Fenômeno'),
    new materiaPorProfessor(2, 'Ronaldo Fenômeno'),
    new materiaPorProfessor(3, 'Ronaldo Fenômeno'),
    new materiaPorProfessor(3, 'Rivaldo'),
    new materiaPorProfessor(4, 'Ronaldo Fenômeno'),
    new materiaPorProfessor(5, 'Denilson Show'),
    new materiaPorProfessor(6, 'Rivaldo'),
    new materiaPorProfessor(7, 'Roberto Carlos'),
    new materiaPorProfessor(8, 'Roberto Carlos'),
    new materiaPorProfessor(9, 'Ronaldinho Gaucho'),
    new materiaPorProfessor(10, 'Rivaldo'),
    new materiaPorProfessor(10, 'Denilson Show'),
  ];
  public profMaterias : profMaterias[];
  public matProfessores : matProfessores[];
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
    new Materia(10, 'Física', "2"),
    new Materia(11, 'Lógica de Programação', "0")
  ];
  public idProfessor = 0;
  public idMateria = 0;
  public Professor = "";
  public Materia = "";
  ngOnInit(): void {
  }
  getProfessor(idProf: number){
    this.idProfessor = idProf;
    this.Professor = ""
    this.profMaterias = [];
    if (idProf > 0){
      this.Professor = this.professores.find(e => e.id == idProf).nome;

      this.profPorMateria.forEach(element => {
        if (element.idProfessor == idProf){
          this.profMaterias.push(new profMaterias(element.nomeMateria));
        }
      });
    }
    
  }
  getMateria(idMateria: number){
    this.idMateria = idMateria;
    this.Materia = ""
    this.matProfessores = [];
    if (idMateria > 0){
      this.Materia = this.materias.find(e => e.id == idMateria).nome;
      
      this.matPorProfessores.forEach(element => {
        if (element.idMateria == idMateria){
          this.matProfessores.push(new matProfessores(element.nomeProfessor));
        }
      });
    }
  }
}
