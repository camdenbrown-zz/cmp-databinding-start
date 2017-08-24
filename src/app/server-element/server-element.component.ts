import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
                                               OnChanges,
                                               DoCheck,
                                               AfterContentInit,
                                               AfterContentChecked,
                                               AfterViewChecked,
                                               AfterViewInit,
                                               OnDestroy {
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!', changes)
  }

  ngDoCheck() {
    console.log('ngDoCheck fired!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit fired!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked fired!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked fired!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit fired!');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnDestroy() {
    console.log('DESTRUCTION!')
  }

}
