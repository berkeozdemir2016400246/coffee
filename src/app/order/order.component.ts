import { Component, OnInit } from '@angular/core';

interface product {
  src : string,
  name: string,
  desc: string
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  espressodrinks = [
    {
      name:'Caffe Latte',
      desc:'Our dark, rich espresso is balanced with steamed milk and topped with a light layer of foam. A perfect milk-forward warm up.',
      src: '../../assets/pic/latte.jpg'
    },
    {
      name:'White Chocolate Mocha',
      desc:'Espresso complemented with white chocolate syrup and steamed milk, topped with whipped cream.',
      src: '../../assets/pic/whitechocolatemocha.jpg'
    },
    {
      name:'Cappuccino',
      desc:'Dark, rich espresso combined with steamed milk, topped with a deep layer of foam.',
      src: "../../assets/pic/cappucino.jpg"
    },
    {
      name:'Caffè Americano',
      desc:'Espresso shots are topped with hot water to produce a light layer of crema in true European style',
      src: '../../assets/pic/americano.jpg'
    }
  ]



  constructor() {
  }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
}
