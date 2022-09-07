import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public booksList =new BehaviorSubject<any>([]); // we can pass & emit values acts like observable 

  constructor() { }
  getBooks(){
    return this.booksList.asObservable(); //get product & subscribe  also
  }
  addtoCart(book:any){
    this.cartItemList.push(book); 
    this.booksList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    
  }
  getTotalPrice(): number {
    let Total=0;
    this.cartItemList.map((a:any)=>{
      Total +=a.total;
    })
    return Total;
  }
  clearCartItem(book:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(book.title == a.title){
        this.cartItemList.splice(index,1);
      }
    })
    this.booksList.next(this.cartItemList);
  }
  clearAllCart(){
    this.cartItemList =[];
    this.booksList.next(this.cartItemList);
  }
}
