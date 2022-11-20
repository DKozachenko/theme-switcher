import { Component } from '@angular/core';

type ThemeType = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  /**
   * Метод смены темы с помощью CSS-переменных
   * @param {ThemeType} theme - тема
   * @memberof AppComponent
   */
  public cssVarsMethod(theme: ThemeType): void {
    document.body.style.setProperty('--background-color-main', `var(--background-color-${theme})`);
    document.body.style.setProperty('--title-color-main', `var(--title-color-${theme})`)
    document.body.style.setProperty('--text-color-main', `var(--text-color-${theme})`)
  }

  /**
   * Метод смены темы с помощью добавления класса
   * @memberof AppComponent
   */
  public classMethod(): void {
    const element: HTMLElement | null = document.querySelector(':root');
    element?.classList.toggle('dark');
  }

  /**
   * Метод смены темы с помощью инвертирования цветов
   * @memberof AppComponent
   */
  public invertMethod(): void {
    const element: HTMLElement | null = document.querySelector(':root');
    element?.classList.toggle('invert');
  }
}
