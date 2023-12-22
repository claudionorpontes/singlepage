import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { loadSinglePageError } from './store/singlepage.actions';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Adicione o seu componente aqui, se necessário
      providers: [
        Title,
        Store // Adicione o seu serviço de store aqui, se necessário
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it(`should have the 'singlepage' title`, () => {
    const titleService = TestBed.inject(Title);

    // Simule a ação que define o título no seu componente
    appComponent.ngOnInit(); // Chame o método que define o título, se existir

    expect(titleService.getTitle()).toBe('singlepage');
  });

  // Adicione outros testes conforme necessário
});
