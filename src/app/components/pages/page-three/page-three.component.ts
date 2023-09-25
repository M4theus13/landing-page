import { Component } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {
  cardOne = 'Controle Emocional'
  cardOneImg = '../../../../assets/card-one.jpeg'

  cardTwo = 'Resolução de problemas'
  cardTwoImg = '../../../../assets/card-two.jpeg'

  cardThree = 'Autoconhecimento'
  cardThreeImg = '../../../../assets/card-three.jpeg'

}
