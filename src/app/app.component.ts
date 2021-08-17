import {Component, OnInit} from '@angular/core';

import uniqueId from 'lodash/uniqueId';
import cloneDeep from 'lodash/cloneDeep';

import {TodoData, ListGenerator} from './services/tree-generator.service';
import {Names} from './names';

const NumRange: [number, number] = [23, 35];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  todos: TodoData[] = [];

  constructor(
    public listGenerator: ListGenerator
  ) {
  }

  ngOnInit(): void {
    // this.todos = this.listGenerator.generate(Names, NumRange, 100);
  }

  add(name: string): void {
    this.todos.unshift(this.newElement(name));
  }

  finalize({id, completed}: TodoData): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].completed = !completed;
  }

  delete(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  newElement(name): TodoData {
    return {
      id: uniqueId(),
      label: name,
      num: this.listGenerator.generateNumber(NumRange),
      completed: false
    };
  }

}
