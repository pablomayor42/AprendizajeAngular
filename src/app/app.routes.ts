import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
  //SI estamos en la ruta hola mundo => HolaMundoComponent

  // /admin => AdminComponent


  {
    path: '',
    component:CounterPageComponent,

  }
];
