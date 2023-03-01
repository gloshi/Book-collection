import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./cardList.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<h1 class='card_list__loader'>Идет загрузка.... </h1>`;
      return this.el;
    } else {
      
      const cardGrid = document.createElement('div')
      cardGrid.classList.add('card_grid')
      this.el.append(cardGrid)
      for (const card of this.parentState.list) {
        cardGrid.append(new Card(this.appState, card).render());
      }
      return this.el;
    }
  }
}
