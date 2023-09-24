import { Component, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // Obtenha a posição da seção em relação à janela
    const sectionTop = this.el.nativeElement.offsetTop;
    const sectionBottom = sectionTop + this.el.nativeElement.offsetHeight;

    // Verifique se a seção está visível na tela
    const isVisible = (window.scrollY >= sectionTop) && (window.scrollY <= sectionBottom);

    // Adicione ou remova a classe 'visible' com base na visibilidade
    if (isVisible) {
      this.renderer.addClass(this.el.nativeElement.querySelector('img'), 'visible');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('img'), 'visible');
    }
  }

}
