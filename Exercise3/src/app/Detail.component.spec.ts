import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppModule],
    }).compileComponents();
  });

  it('should create the detail component', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const detailComponent = fixture.componentInstance;
    expect(detailComponent).toBeTruthy();
  });
});