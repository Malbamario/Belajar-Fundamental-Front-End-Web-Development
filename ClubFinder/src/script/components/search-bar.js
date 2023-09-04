class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set _clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchElement').value;
    }

    render(){
        this.innerHTML = `
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        `;
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }

}

customElements.define('search-bar', SearchBar);