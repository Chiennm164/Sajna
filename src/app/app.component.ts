import { Component, OnInit } from '@angular/core';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { ProductService } from 'services/product.service';
import { Product } from 'models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faCirclePlay=faCirclePlay

arrBands :Array<any>=[
'../assets/images/brands/band1.png',
'../assets/images/brands/band2.png',
'../assets/images/brands/band3.png',
'../assets/images/brands/band4.png',
'../assets/images/brands/band5.png',
'../assets/images/brands/band6.png',
'../assets/images/brands/band7.png',
'../assets/images/brands/band8.png',
'../assets/images/brands/band9.png',
'../assets/images/brands/band10.png',
'../assets/images/brands/band11.png',
]

 products: Array<any> =[]
productsTopRated: Array<any> =[]
productsBestSelling: Array<any> =[]
productsLatestTrends: Array<any> =[]
getProductsFromService():void{this.product.getProductsFromAPI().subscribe(list=>
  {
    this.products = list

    this.handlerProductsLatestTrends(this.products)
    this.handlerProductsTopRated(this.products)
    this.handlerProductsBestSelling(this.products)
})}


handlerProductsBestSelling(products:any):void{
  this.productsBestSelling = products.sort((a:any,b:any)=>{
    return (+a.rating.count) - (+b.rating.count);
  })
// console.log(this.productsBestSelling);

//   this.productsBestSelling.forEach((element:any) => {
// console.log(element.rating.count  + " id :" + element.id + "");
// });
}
handlerProductsTopRated(products:any):void{
  this.productsTopRated = products

  this.productsTopRated.sort((a:any,b:any)=>{
    return (+a.rating.rate) - (+b.rating.rate);
  })
  // this.productsTopRated.forEach((element:any) => {
  //   console.log(element.rating.rate  + " id :" + element.id + "");
  // });

  // console.log(this.productsTopRated);
}

handlerProductsLatestTrends(products:any):void{
  this.productsLatestTrends = products.sort((a:any,b:any)=>{
    return parseFloat(a.price) - parseFloat(b.price);
  })
  // this.productsLatestTrends.forEach((element:any) => {
  //   console.log(element.price  + " id :" + element.id + "")
  //   });
  // console.log(this.productsLatestTrends);

}


constructor( private product:ProductService) { }
 ngOnInit(): void {
   this.getProductsFromService()
 }
}
