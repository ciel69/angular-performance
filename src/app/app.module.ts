import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {AppComponent} from './app.component';
import {CalculatePipe} from './pipes/calculate.pipe';
import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import { BlockComponent } from './components/block/block.component';
import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';
import { AdDirective } from './directives/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatePipe,
    TodoFormComponent,
    TodoListComponent,
    BlockComponent,
    DynamicListComponent,
    AdDirective
  ],
  entryComponents: [
    BlockComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
