class ClubList extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: "closed" });
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
        :host>.placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        </style>
        `;
        this._clubs.forEach((club) => {
            const clubElement = document.createElement("club-item");
            clubElement.club = club;
            this._shadowDOM.appendChild(clubElement);
        });
    }

    renderError = (message) => {
        this.innerHTML = ``;
        this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    };
}

customElements.define("club-list", ClubList);
