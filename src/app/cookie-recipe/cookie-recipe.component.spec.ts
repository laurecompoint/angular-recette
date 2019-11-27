import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieRecipeComponent } from './cookie-recipe.component';

describe('CookieRecipeComponent', () => {
  let component: CookieRecipeComponent;
  let fixture: ComponentFixture<CookieRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
