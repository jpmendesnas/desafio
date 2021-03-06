import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = {
    nome:'',
    descricao:'',
    valor: null,
    tags:''
    
  }
  
  constructor(private ProductService: ProductService,
    private router:Router) { }

  ngOnInit(): void {

   
  }

  createProduct():void{

    this.ProductService.create(this.product).subscribe(() =>{

      this.ProductService.showMessage(`Produto salvo ${this.product.descricao} com sucesso!!`)

      this.router.navigate(['/products'])
    })

    
    
  }

  cancel():void{

    this.router.navigate(['/products'])

  }


}
