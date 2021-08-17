import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import {TodoData} from '../../services/tree-generator.service';
import {fibonacci, logFibonacci} from '../../utils/fibonacci';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterContentInit {

  @Input()
  list: TodoData[] = [];

  @Output()
  finalize = new EventEmitter<TodoData>();

  @Output()
  delete = new EventEmitter<string>();

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  calculate(num: number): number {
    return fibonacci(num);
  }

}
