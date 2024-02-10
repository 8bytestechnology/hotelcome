// checkout.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <div class="text-center">
      <button class="btn btn-info" (click)="checkout()">Check Out</button>
    </div>
  `,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  itemsInCart: number = 0;

  checkout(): void {
    // Simulate a simple checkout process
    if (this.itemsInCart > 0) {
      console.log(`Processing checkout for ${this.itemsInCart} item(s).`);
      // You can add additional logic here, such as making API calls or navigating to a checkout page.
    } else {
      console.log('No items in the cart. Unable to proceed with checkout.');
    }
  }
}

