import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {log} from "util";
import {OrderComponent} from "../order/order.component";
import {ServeService} from "../serve.service";



interface order {
  name:string
  amount:number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {


  constructor(private Serve: ServeService, private order: OrderComponent) {
  }

  ngOnInit() {
  }

  sendOrder(){
    log(this.order.orders)
    log("from cartComp")
    //this.Serve.sendOrders(this.order.orders).subscribe(data => {

   // })
  }

}
