import DataSource from './../data/data-source.js';
import defineCustomElements from './custom-elements.js';

const main = async () => {
  defineCustomElements();

  const appBar = document.createElement('app-bar');
  const searchContainer = document.createElement('search-bar');
  const clubListElement = document.createElement('club-list');
  
  document.querySelector('header').appendChild(appBar);
  document.querySelector('main').appendChild(searchContainer);
  document.querySelector('main').appendChild(clubListElement);
  const searchElement = document.querySelector('#searchElement');  
  const buttonSearchElement = document.querySelector('#searchButtonElement');  
  
  const onButtonSearchClicked = async () => {
    try{
      clubListElement.clubs = await DataSource.searchClub(searchElement.value);
    } catch(rejectedMess){
      fallbackResult(rejectedMess);
    }
  };
  
  const fallbackResult = message => {
    clubListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  };
  
  // Tambahan dari saya agar ketika pertama kali di-load semua club muncul terlebih dahulu
  try{
    clubListElement.clubs = await DataSource.searchClub(searchElement.value);
  } catch(rejectedMess){
    fallbackResult(rejectedMess);
  }

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;