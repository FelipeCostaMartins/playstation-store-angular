import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent {
  @Input()
  photo:string = ""
  @Input()
  title:string = ""
  @Input()
  btnText:string = ""
  @Input()
  description:string = ""

}
