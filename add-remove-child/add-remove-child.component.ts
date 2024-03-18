import { Component } from '@angular/core';

@Component({
  selector: 'app-add-remove-child',
  standalone: true,
  imports: [],
  templateUrl: './add-remove-child.component.html',
  styleUrl: './add-remove-child.component.css'
})
export class AddRemoveChildComponent {
  items:number=10
  products:number=50

  increaseItems(){
    this.items++
  }
  decreaseItems(){
    this.items--
  }
  increaseProducts(){
    this.products++
  }
  decreaseProducts(){
    this.products--
  }
}
