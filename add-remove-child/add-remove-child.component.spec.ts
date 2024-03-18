import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveChildComponent } from './add-remove-child.component';

describe('AddRemoveChildComponent', () => {
  let component: AddRemoveChildComponent;
  let fixture: ComponentFixture<AddRemoveChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRemoveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
