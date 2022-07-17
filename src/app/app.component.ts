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
arrCategorys :Array<any> =[
{
  title:'Winter wears',
  des:'Good personality in cold season',
  category: [
    {
      image: '../assets/images/category/cate1.jpg' ,
    name:'Black leather jacket',
    price: '$ 127.00'
    },
    {
      image: '../assets/images/category/cate2.jpg' ,
    name:'Bumper Jacket',
    price: '$ 99.00'
    },
    {
      image: '../assets/images/category/cate3.jpg' ,
    name:'Full sleeve woolen shirt',
    price: '$ 112.00'
    }
  ]
},
{
  title:'Accessories',
  des:'Optional but essential products',
  category: [
    {
      image: '../assets/images/category/cate4.jpg' ,
    name:'tip note boot',
    price: '$ 132.00'
    },
    {
      image: '../assets/images/category/cate10.jpg' ,
    name:'Classy goggles',
    price: '$ 88.00'
    },
    {
      image: '../assets/images/category/cate6.jpg' ,
    name:'white short cap',
    price: '$ 92.00'
    }
  ]
},
{
  title:'fresh clothing',
  des:'Fresh dress-up for cool style',
  category: [
    {
      image: '../assets/images/category/cate7.jpg' ,
    name:'Bluish denim t-shirt',
    price: '$ 102.00'
    },
    {
      image: '../assets/images/category/cate8.jpg' ,
    name:'short sleeve t-shirt',
    price: '$ 105.00'
    },
    {
      image: '../assets/images/category/cate9.jpg' ,
    name:'black t-shirt',
    price: '$ 123.00'
    }
  ]
}
,
{
  title:'outer wear',
  des:'Final touch-up in you fashion',
  category: [
    {
      image: '../assets/images/category/cate10.jpg' ,
    name:'v shape net outer',
    price: '$ 120.00'
    },
    {
      image: '../assets/images/category/cate11.jpg' ,
    name:'sweat shirt',
    price: '$ 115.00'
    },
    {
      image: '../assets/images/category/cate12.jpg' ,
    name:'White half t-shirt',
    price: '$ 112.00'
    } ]
}

]
arrNews :Array<any> =[
{
  image:'../assets/images/news/new1.jpg',
  date:'Beauty   /   july 22, 2021',
  title:'New York Fashion Show, Looks and More',
  des:'The only way to do something in depth is to work hard. I like the irony in my work. I like the irony in my work. I love a black dress. Men don’t want another man to look.'
},
{
  image:'../assets/images/news/new2.jpg',
  date:'clothing   /   july 22, 2021',
  title:'favourite online fashion stores for designer outfit',
  des:'I like the irony in my work. I love a black dress. Men don’t want another man to look. The only way to do something in depth is to work hard.'
},{
  image:'../assets/images/news/new3.jpg',
  date:'fashion   /   july 22, 2021',
  title:'Basic Fashion Rules Every Woman Should Know',
  des:'I love a black dress. Men don’t want another man to look. The only way to do something in depth is to work hard. I like the irony in my work. I like the irony in my work.dress.'
}

]
arrFeatures :Array<any>=[

  {
    icon:"ti ti-shopping-cart",
    title :"Free delivery",
    des:"Lorem ipsum dolor sit amet, consectetur adipi elit."
  },
  {
    icon:"ti ti-shield",
    title :"100% secure payment",
    des:"Lorem ipsum dolor sit amet, consectetur adipi elit."

  },
  {
    icon:"ti ti-medall-alt",
    title :"Quality guarantee",
    des:"Lorem ipsum dolor sit amet, consectetur adipi elit."

  },
  {
    icon:"ti ti-bookmark",
    title :"big offers",
    des:"Lorem ipsum dolor sit amet, consectetur adipi elit."

  }
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
  products.sort((a:any,b:any)=>{
    return parseFloat((a.rating.count)) - parseFloat((b.rating.count));
  })
  products.forEach((element:any) => {
    this.productsBestSelling.push(element)
  });
}
handlerProductsTopRated(products:any):void{
  products.sort((a:any,b:any)=>{
    return parseFloat((a.rating.rate)) - parseFloat((b.rating.rate));
  })
  products.forEach((element:any) => {
   this.productsTopRated.push(element)
  });
}

handlerProductsLatestTrends(products:any):void{
   products.sort((a:any,b:any)=>{
    return (parseFloat(a.price) - parseFloat(b.price));
  })
  products.forEach((element:any) => {
    this.productsLatestTrends.push(element)
   });
}


constructor( private product:ProductService) { }
 ngOnInit(): void {
   this.getProductsFromService()
 }
}
