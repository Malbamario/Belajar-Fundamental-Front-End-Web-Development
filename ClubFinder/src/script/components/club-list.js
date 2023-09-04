class ClubList extends HTMLElement{
    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    render(){
        this.innerHTML = ``;
        this._clubs.forEach(club => {
            const clubElement = document.createElement('club-item');
            clubElement.club = club;
            this.appendChild(clubElement);
          });
    }

    renderError = message => {
        this.innerHTML = ``;
        this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
      };
}

customElements.define('club-list', ClubList);