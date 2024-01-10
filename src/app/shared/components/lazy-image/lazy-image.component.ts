import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  template: `
    <div class="d-flex justify-content-center">
      <img
        [src]="url"
        [alt]="alt"
        class="card-img-top animate__animated animate__fadeIn"
        (load)="onLoad()"
        [ngStyle]="{display: hasLoaded ? '' : 'none' }"
      >
      <img *ngIf="!hasLoaded" src="assets/loader.svg" alt="Loading" height="35" class="my-3">
    </div>
  `
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    this.hasLoaded = true;
  }
}
