import {ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../../directives/ad.directive';
import {BlockComponent} from '../block/block.component';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit, OnDestroy {
  @Input() ads: any[] = [];

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: number | undefined;

  currentAdIndex = -1;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    Array.from({ length: 1000 }, (_, idx) => `${++idx}`).forEach(() => this.loadComponent());
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlockComponent);

    const componentRef = this.adHost.viewContainerRef.createComponent<BlockComponent>(componentFactory);
    componentRef.instance.data = 'test';
  }

}
