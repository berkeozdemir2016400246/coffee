import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface order {
  name:string
  amount:number
}

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http:HttpClient) { }

  sendOrders(orders: Map<string,number>){
      let ordersArray = new Array<order>()
    for(let o of orders.keys()){
      let norder = {
        name: o,
        amount: orders.get(o)
      }
      ordersArray.push(norder)
    }
      return this.http.put('/api/order.php', ordersArray)
  }
}
