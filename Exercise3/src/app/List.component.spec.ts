import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the list', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const listComponent = fixture.componentInstance;
    expect(listComponent).toBeTruthy();
  });

  it(`should have the 'Exercise3' title`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const listComponent = fixture.componentInstance;
    expect(listComponent.title).toEqual('Exercise3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Exercise3');
  });
});
