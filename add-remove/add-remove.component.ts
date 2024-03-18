import { Component, ViewChild } from '@angular/core';
import { AddRemoveChildComponent } from '../add-remove-child/add-remove-child.component';
@Component({
  selector: 'app-add-remove',
  standalone: true,
  imports: [AddRemoveChildComponent],
  templateUrl: './add-remove.component.html',
  styleUrl: './add-remove.component.css'
})
export class AddRemoveComponent {
  

  @ViewChild(AddRemoveChildComponent) child:AddRemoveChildComponent|undefined;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');  
  }

  increaseItems(){
    this.child?.increaseItems()
  }
  decreaseItems(){
    this.child?.decreaseItems()
  }
  increaseProducts(){
    this.child?.increaseProducts()
  }
  decreaseProducts(){
    this.child?.decreaseProducts()
  }
}
