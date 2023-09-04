class AppBar extends HTMLElement{
    connectedCallback(){
        this.title = `Club Finder`;
        this.render();
    }

    set title(title){
        this._title = title;
        this.render();
    }

    render(){
        this.innerHTML = `<h2>${this._title}</h2>`;
    }
}

customElements.define('app-bar', AppBar);