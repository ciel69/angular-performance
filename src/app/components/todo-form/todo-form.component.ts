import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <div class="input-field">
      <input type="text" pInputText placeholder="Add Todo..." [(ngModel)]="value" (keydown)="handleKey($event)">
    </div>`,
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {

  @Output()
  add = new EventEmitter<string>();

  value = '';

  handleKey(event: any) {
    if (event.keyCode === 13 && this.value.length) {
      this.add.emit(this.value);
      this.value = '';
    }
  }

}
