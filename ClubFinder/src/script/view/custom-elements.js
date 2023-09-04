import AppBar from "./app-bar.js";
import SearchBar from "./search-bar.js";
import ClubList from "./club-list.js";

function defineCustomElements(){
    customElements.define('app-bar', AppBar);
    customElements.define('search-bar', SearchBar);
    customElements.define('club-list', ClubList);
}

export default defineCustomElements;