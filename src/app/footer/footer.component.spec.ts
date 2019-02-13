import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contacts name and phone', () => {
    const contact = compiled.querySelectorAll('.contact');
    expect(contact.length).toEqual(component.contacts.length);
    contact.forEach((x, index) => {
      expect(x.querySelector('.name').textContent).toContain(component.contacts[index].name);
      expect(x.querySelector('a').textContent).toContain(component.contacts[index].phone);
    });
  });

  it('should display correct address in footer', () => {
    expect(compiled.querySelector('.address').textContent.trim()).toContain(component.addresses.join('  '));
  });

  it('should display correct email in copyright', () => {
    expect(compiled.querySelector('#footer-email').textContent).toContain(component.app);
    expect(compiled.querySelector('#footer-email').getAttribute('href')).toContain('mailto:' + component.email);
  });
});
