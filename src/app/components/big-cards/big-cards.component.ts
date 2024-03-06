import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-cards',
  standalone: true,
  imports: [],
  templateUrl: './big-cards.component.html',
  styleUrl: './big-cards.component.css'
})
export class BigCardsComponent {
  @Input()
  photoA1:string = ""
  @Input()
  photoA2:string = ""
  @Input()
  photoA3:string = ""
  @Input()
  photoB1:string = ""
  @Input()
  photoB2:string = ""
  @Input()
  photoB3:string = ""
}
