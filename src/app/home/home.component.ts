import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

export interface PeriodicElement {
  name: string;  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Biography'},
  { name: 'Fiction'},
  { name: 'Mystery'},
  { name: 'Fantasy'},
  { name: 'Romance'}  
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;

  public booksList:any;

  constructor(
    private api: ApiService, 
    private cartService: CartService,
    private _snackBar: MatSnackBar
    ) { }

    //snackbar
    openSnackBar() {
      this._snackBar.open('One item added to Cart', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
       duration: this.durationInSeconds * 1000,
      });
    }

  ngOnInit(): void {
    this.api.getBooks()
    .subscribe(res=>{
      this.booksList=res;

      this.booksList.forEach((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

}
