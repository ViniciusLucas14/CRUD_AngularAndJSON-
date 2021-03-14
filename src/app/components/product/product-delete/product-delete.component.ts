import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product: Product = {
    name: '',
    price: 0
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe(product => {
      this.product = product
    })
  }
  deleteProduct(): void{
    this.productService.delete(this.product.id).subscribe(() =>{
      this.productService.showMessage('Produto Excluído com Sucesso')
      this.router.navigate(["/products"])
    })
  }

   cancel(): void {
    this.router.navigate(["/products"]);
   }
}
