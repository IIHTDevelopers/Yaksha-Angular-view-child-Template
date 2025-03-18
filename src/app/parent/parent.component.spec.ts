import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { CounterComponent } from '../counter/counter.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ParentComponent', () => {
  let parentComponent: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let counterComponent: CounterComponent;
  let counterElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    parentComponent = fixture.componentInstance;
    counterComponent = fixture.debugElement.query(By.directive(CounterComponent)).componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the parent component', () => {
      expect(parentComponent).toBeTruthy();
    });

    it('should increment the counter when incrementCounter is called', () => {
      jest.spyOn(counterComponent, 'increment');
      parentComponent.incrementCounter();
      expect(counterComponent.increment).toHaveBeenCalled();
    });

    it('should decrement the counter when decrementCounter is called', () => {
      jest.spyOn(counterComponent, 'decrement');
      parentComponent.decrementCounter();
      expect(counterComponent.decrement).toHaveBeenCalled();
    });
  });
});
