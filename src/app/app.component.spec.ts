import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // ✅ Import standalone component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the "Tracker" title', () => {
    expect(component.title).toEqual('Tracker'); // ✅ Match expected title
  });

  it('should render title in the header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header')?.textContent).toContain('Tracker'); // ✅ Check header text
  });
});
