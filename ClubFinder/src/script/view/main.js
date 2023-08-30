const main = async () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  const onButtonSearchClicked = async () => {
    try{
      renderResult(await DataSource.searchClub(searchElement.value));
    } catch(rejectedMess){
      fallbackResult(rejectedMess);
    }
  };

  const renderResult = results => {
    clubListElement.innerHTML = '';
    results.forEach(club => {
      let {name, fanArt, description} = club;

      const clubElement = document.createElement('div');
      clubElement.setAttribute('class', 'club');

      clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
      <div class="club-info">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = message => {
    clubListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  };

  // Tambahan dari saya agar ketika pertama kali di-load semua club muncul terlebih dahulu
  try{
    renderResult(await DataSource.searchClub(searchElement.value));
  } catch(rejectedMess){
    fallbackResult(rejectedMess);
  }
  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
