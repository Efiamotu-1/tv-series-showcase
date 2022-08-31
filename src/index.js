import './style.css';
import './popup.css';
import './cardStyles.css';
import Series from './modules/Series.js';
import createCard from './cards.js';
import openModal  from './popup';

// Initialize Series Class
const seriesCl = new Series();

const baseUrl = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  let response = await fetch(baseUrl)
  let data = await response.json()
 
  data.splice(141).forEach( (el, i) => {
    seriesCl.allSeries.push(el)
    createCard(i, seriesCl.allSeries[i].name, seriesCl.allSeries[i].image.medium)
  })
};

fetchShows();

// const fetchid = async () => {
//   let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//   })
//   console.log(response)
// };
// fetchid()

const displayPop = async() => {
  await fetchShows()
  let popup = document.querySelectorAll('.comment-btn')
  let modal = document.querySelector('.modal')
  popup.forEach(el => {
      el.addEventListener('click', (e) => {
        let id = Number(e.target.id.split('d')[1])
        modal.classList.toggle('hide')       
       openModal(id)
       
      })
    })

}

displayPop()