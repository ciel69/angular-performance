import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {logFibonacci} from '../../utils/fibonacci';
import {ListGenerator} from '../../services/tree-generator.service';

const NumRange: [number, number] = [23, 29];

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input()
  data = '';

  num: number;

  constructor(
    public listGenerator: ListGenerator
  ) { }

  ngOnInit() {
    this.num = this.listGenerator.generateNumber(NumRange);
  }

  calculate(num: number): number {
    return logFibonacci(num);
  }

}
