import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuery = value;
    console.log(value)
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
           <div class='search__wrapper'>
                <input 
                
                type='text' 
                placeholder='Найти книгу или автора....'
                class='search__input'
                value='${
                  this.state.searchQueary ? this.state.searchQueary : ""
                }'
                />
                <img src='/static/search.svg' alt='search' />
           </div>
           <button aria-label='Искать'>
           <img src='/static/search-white.svg' alt='search-white'  />
           </button>
        `;
    this.el.querySelector("button").addEventListener("click", () => {
      this.search();
    });
    this.el.querySelector("input").addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        this.search();
      }
    });

    return this.el;
  }
}
