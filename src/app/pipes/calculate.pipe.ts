import { Pipe, PipeTransform } from '@angular/core';
import {logFibonacci} from '../utils/fibonacci';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(num: number): any {
    return logFibonacci(num);
  }

}
