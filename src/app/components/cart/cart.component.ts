import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  currentStep = 1;
  cartItems = [
    // Dummy cart items for example
    { id: 1, title: 'Book Title 1', author: 'Author Name', price: 15.99, quantity: 1, image: '../../assets/Image 11@2x.png' },
    { id: 2, title: 'Book Title 2', author: 'Author Name', price: 16.99, quantity: 1, image: '../../assets/Image 11@2x.png' }
    // More items can be added here
  ];
  address = { name: '', street: '', city: '', zip: '', country: '' };
  constructor() { }

  ngOnInit(): void {
  }

  toggleSection(step: number) {
    if (this.currentStep === step) {
      this.currentStep = 0; // Optional: collapse the current open section
    } else {
      this.currentStep = step;
    }
  }

  calculateTotal() {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
  
  goToAddressDetails(): void {
    this.currentStep = 2;
  }

  goToOrderSummary(){
    this.currentStep =3;
  }

  finalizeOrder() {
    console.log('Order placed:', this.cartItems, this.address);
  }
}
