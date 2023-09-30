import DataSource from './../data/data-source.js';

const main = async () => {
  const appBar = document.createElement('app-bar');
  const searchElement = document.createElement('search-bar');
  const clubListElement = document.createElement('club-list');
  
  document.querySelector('header').appendChild(appBar);
  document.querySelector('main').appendChild(searchElement);
  document.querySelector('main').appendChild(clubListElement);
  
  const onButtonSearchClicked = async () => {
    try{
      clubListElement.clubs = await DataSource.searchClub(searchElement.value);
    } catch(rejectedMess){
      clubListElement.renderError(rejectedMess);
    }
  };
  
  // Tambahan dari saya agar ketika pertama kali di-load semua club muncul terlebih dahulu
  try{
    clubListElement.clubs = await DataSource.searchClub(searchElement.value);
  } catch(rejectedMess){
    clubListElement.renderError(rejectedMess);
  }
  
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;