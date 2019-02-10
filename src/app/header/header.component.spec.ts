import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have company name in header', () => {
    expect(compiled.querySelector('h1').textContent).toContain(component.companyName);
    expect(compiled.querySelector('h1>a').getAttribute('href')).toContain('/');
  });

  it('should have tag line in header', () => {
    expect(compiled.querySelector('#tag-line').textContent).toContain(component.tagLine);
  });

  it('should have all the correct navigation routes in header', () => {
    const routes = compiled.querySelectorAll('.navbar>a');
    expect(routes.length).toEqual(component.routes.length);
    routes.forEach((x, index) => {
      expect(x.textContent).toContain(component.routes[index].link);
      expect(x.getAttribute('href')).toContain(component.routes[index].url);
    });
  });
});
