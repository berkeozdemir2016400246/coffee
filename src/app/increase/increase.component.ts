import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderComponent} from "../order/order.component";
import {log} from "util";

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  @Output() private notify: EventEmitter<number> = new EventEmitter<number>();
  public amount:number;



  constructor(private order: OrderComponent) {
    this.amount = 0

  }
  ngOnInit() {
  }

  update(event) {
    const target = event.target
    this.amount = target.value
  }

  increaseValue() {
    this.amount++;
  }

  decreaseValue() {
    this.amount = isNaN(this.amount) ? 0 : this.amount;
    this.amount < 1 ? this.amount = 1 : '';
    this.amount--;

  }

  transmitUp( amount:number) {
    this.notify.emit(amount)

  }


}
