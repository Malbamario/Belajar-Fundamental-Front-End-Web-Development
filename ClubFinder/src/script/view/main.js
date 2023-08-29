const main = function () {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  const onButtonSearchClicked = function () {
    const dataSource = new DataSource(renderResult, fallbackResult);
    dataSource.searchClub(searchElement.value);
  };

  const renderResult = function (results) {
    clubListElement.innerHTML = '';
    results.forEach(function (club) {
      let {name, fanArt, description}= club;

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

  const fallbackResult = function (message) {
    clubListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  };

  // Tambahan dari saya agar ketika pertama kali di-load semua club muncul terlebih dahulu
  const dataSource = new DataSource(renderResult, fallbackResult);
  dataSource.searchClub(searchElement.value);
  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
