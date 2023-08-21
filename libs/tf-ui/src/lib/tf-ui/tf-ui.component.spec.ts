import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TfUiComponent } from './tf-ui.component';

describe('TfUiComponent', () => {
  let component: TfUiComponent;
  let fixture: ComponentFixture<TfUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TfUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
