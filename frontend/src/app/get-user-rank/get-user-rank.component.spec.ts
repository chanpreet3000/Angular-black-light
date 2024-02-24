import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserRankComponent } from './get-user-rank.component';

describe('GetUserRankComponent', () => {
  let component: GetUserRankComponent;
  let fixture: ComponentFixture<GetUserRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUserRankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUserRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
