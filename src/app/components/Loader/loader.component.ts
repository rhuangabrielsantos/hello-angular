import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  template: `<img src="../../assets/loading.svg" alt="" data-testid="loader">`,
  styles: `
    @keyframes rotate{
      to{ transform: rotate(360deg); }
    }

    img {
      animation: rotate 1.5s linear infinite;
      width: 50px;
      heigth: 50px;
    }
  `
})
export class LoaderComponent {}
