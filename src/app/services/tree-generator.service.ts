import {Injectable} from '@angular/core';
import uniqueId from 'lodash/uniqueId';

export interface TodoData {
  id: string;
  label: string;
  num: number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ListGenerator {
  generate(labels: string[], numRange: [number, number], width: number): TodoData[] {
    const result: TodoData[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(labels, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateLabel(labels: string[]) {
    return labels[Math.floor(Math.random() * labels.length)];
  }

  generateNode(labels: string[], numRange: [number, number]): TodoData {
    return {
      id: uniqueId(),
      label: this.generateLabel(labels),
      num: this.generateNumber(numRange),
      completed: false
    };
  }
}
