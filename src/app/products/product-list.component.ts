import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _filterValue: string;
    get filterValue(): string{
        return this._filterValue;
    }

    set filterValue(value: string) {
        this._filterValue = value;
        this.filteredProducts = this.filterValue ? this.performFilter(this.filterValue) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService : ProductService){
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                this.filteredProducts = this.products
            },
            error(err) {this.errorMessage = err}
        });
        
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onStarClicked(message: string): void{
        this.pageTitle = 'Product Details : '+ message;
    }
}