import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit{

  @Input()
  title:string = ""
  @Input()
  photo1:string = ""
  @Input()
  photo2:string = ""
  @Input()
  photo3:string = ""
  @Input()
  photo4:string = ""
  @Input()
  photo5:string = ""

  ngOnInit(): void {
  }

}
