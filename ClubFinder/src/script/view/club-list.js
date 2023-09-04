import ClubItem from "./club-item.js";
customElements.define('club-item', ClubItem);

class ClubList extends HTMLElement{
    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    render(){
        this._clubs.forEach(club => {
            const clubElement = document.createElement('club-item');
            clubElement.club = club;
            this.appendChild(clubElement);
          });
    }
}

export default ClubList;