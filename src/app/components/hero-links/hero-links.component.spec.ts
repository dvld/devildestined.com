import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLinksComponent } from './hero-links.component';

describe('HeroLinksComponent', () => {
  let component: HeroLinksComponent;
  let fixture: ComponentFixture<HeroLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
