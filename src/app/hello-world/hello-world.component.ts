import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mean-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  @Input() name: string
  @Output() changeName: EventEmitter<void> = new EventEmitter<void>()
}
