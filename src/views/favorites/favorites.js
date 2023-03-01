import { AbstrackView } from "../../common/view.js";
import onChange from 'on-change';
import { Header } from "../../components/header/header.js";

import { CardList } from "../../components/cardList/cardList.js";

export  class FavoritesView extends AbstrackView {
    state = {
        list: [],
        numFound: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState){
        super()
        this.appState = appState
        this.appState = onChange(this.appState, this.AppStateHook.bind(this))
        this.setTitle('Мои книги')
    }

    destroy(){
        onChange.unsubscribe(this.appState)
        
    }

    AppStateHook(path){
        if(path === 'favorites'){
           this.render()
        }
    }
   

  

    render(){
        const main = document.createElement('div')
        main.innerHTML = `
            <h1>Избранные книги </h1>
        `;
        this.app.innerHTML = ''
        main.append(new CardList(this.appState,{list: this.appState.favorites}).render() )
        this.app.append(main)
        this.renderHeader()
    }

    renderHeader(){
        const header = new Header(this.appState).render()
        this.app.prepend(header)    
    }
}