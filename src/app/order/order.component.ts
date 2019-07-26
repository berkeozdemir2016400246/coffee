import { Component, OnInit } from '@angular/core';
import {log} from "util";


interface product {
  src : string,
  name: string,
  desc: string
}

interface order {
  name: string
  amount: number
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  total: number
  orders: Map<string,number>
  prices: Map<string,number>


  espressodrinks = [
    {
      name:'Caffe Latte',
      desc:'Our dark, rich espresso is balanced with steamed milk and topped with a light layer of foam. A perfect milk-forward warm up.',
      src: '../../assets/pic/latte.jpg',
      price: 12
    },
    {
      name:'White Chocolate Mocha',
      desc:'Espresso complemented with white chocolate syrup and steamed milk, topped with whipped cream.',
      src: '../../assets/pic/whitechocolatemocha.jpg',
      price: 13
    },
    {
      name:'Cappuccino',
      desc:'Dark, rich espresso combined with steamed milk, topped with a deep layer of foam.',
      src: "../../assets/pic/cappucino.jpg",
      price: 11
    },
    {
      name:'Caffè Americano',
      desc:'Espresso shots are topped with hot water to produce a light layer of crema in true European style',
      src: '../../assets/pic/americano.jpg',
      price:14
    }
  ]

  iceddrinks = [
    {
      name:'Cold Brew',
      desc:'Our Cold Brew coffee is handcrafted in small batches, slow-steeped in cool water for 20 hours, without touching heat, to give a super-smooth flavour',
      src: '../../assets/pic/coldbrew.jpg',
      price: 15
    },
    {
      name:'Cold Brew Latte',
      desc:'Try our Cold Brew coffee just the way you like it. Add milk for a smoother flavour or one of our many dairy free options for a creamy and more flavourable finish.',
      src: '../../assets/pic/nitrocoldbew.jpg',
      price: 14
    },
    {
      name:'Nitro Cold Brew',
      desc:'Sıtarbakış Cold Brew coffee is infused with nitrogen to give the beverage a smooth and velvety texture. Nitro Cold Brew is cold right out of the tap and served unsweetened without ice. A completely new coffee experience!',
      src: "../../assets/pic/nitrocoldbrew.jpg",
      price: 15
    },
    {
      name:'Sıtarbakış Doubleshot™ Iced Coffee',
      desc:'Made with rich, full-bodied Signature espresso thats shaken over ice and a touch of sweetened milk, this drink is delightfully convenient and easy to drink',
      src: '../../assets/pic/doubleshot.jpg',
      price: 20
    }
  ]



  constructor() {
    this.total = 0
    this.orders = new Map<string,number>()
    this.prices = new Map<string, number>()
    for(let drink of this.iceddrinks) {
      this.prices.set(drink.name, drink.price)
    }
    for(let drink of this.espressodrinks) {
      this.prices.set(drink.name, drink.price)
    }
  }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  updateCart(event:number,name:string){
    const amount = event
    if(amount > 0) {
      this.orders.set( name, amount)
      this.updateTotal()
    }
    log(name,event)
  }

  updateTotal(){
    this.total = 0
    for(let key of this.orders.keys()){
      this.total= this.total+this.prices.get(key)*this.orders.get(key)

    }
    log(this.total)
  }

}
