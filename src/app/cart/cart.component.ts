import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;
    
  public books: any=[];
  public Total: number= 0;
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }
 
  openSnackBar() {
    this._snackBar.open('Book Removed from cart', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
     duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res => {
      this.books=res;
      this.Total= this.cartService.getTotalPrice();
    })
  }
  
  clearCartItem(item:any){
    this.cartService.clearCartItem(item);
  }
  emptyCart(){
    this.cartService.clearAllCart();
  }
  }

