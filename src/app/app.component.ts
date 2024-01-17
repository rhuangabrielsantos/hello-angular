import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderComponent } from './components/Loader/loader.component';

type AdviceType = {
  id: number;
  advice: string;
}

type SlipAdviceType = {
  slip: AdviceType;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  advice: AdviceType | null = null;
  loading: boolean = false;

  constructor(
    private readonly http_: HttpClient,
  ) {}

  ngOnInit() {
    this.getRandomAdvice();
  }

  getRandomAdvice() {
    this.loading = true;
    this.http_.get<SlipAdviceType>('https://api.adviceslip.com/advice').subscribe(
      (response) => {
        this.advice = response.slip
        this.loading = false
      },
    );
  }
}
