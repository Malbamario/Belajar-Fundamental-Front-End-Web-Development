class ClubItem extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({ mode: "closed" });
    }

    set club(club){
        this._club = club;
        this.render();
    }

    render(){
        let {name, fanArt, description} = this._club;
        this._shadowDOM.innerHTML = `
        <style>
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
      
           .fan-art-club {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
      
          .club-info {
            padding: 24px;
          }
      
          .club-info>h2 {
            font-weight: lighter;
          }
      
          .club-info>p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
          }
        </style>
        <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        <div class="club-info">
            <h2>${name}</h2>
            <p>${description}</p>
        </div>`;
    }
}
customElements.define('club-item', ClubItem);