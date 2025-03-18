import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the counter component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize counter to 0', () => {
      expect(component.counter).toBe(0);
    });

    it('should increment the counter', () => {
      component.increment();
      expect(component.counter).toBe(1);
    });

    it('should decrement the counter', () => {
      component.decrement();
      expect(component.counter).toBe(-1);
    });
  });
});
