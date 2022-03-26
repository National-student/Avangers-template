let elForm = document.querySelector('.form-movie')
let elFormYear = document.querySelector('#form__year');
let elFormRating = document.querySelector('#form__rating');
let elButton = document.querySelector('#search');
let elCount = document.querySelector('#count');
let elList = document.querySelector('#list');

function sliceMovies(sumMovies) {
    
let newMovies  = sumMovies.slice(0, 50);

elList.innerHTML = null
    
for (let item of newMovies) {
    
    // Create element

    let elItem = document.createElement('li');
    let elDiv = document.createElement('div');
    let elImg = document.createElement('img');
    let elDiv2 = document.createElement('div');
    let elH4 = document.createElement('h4');
    let elPi = document.createElement('p');
    let elSpan = document.createElement('span');
    let elPi2 = document.createElement('p');
    let elDiv3 = document.createElement('div');
    let elButton1 = document.createElement('button');
    let elButton2 = document.createElement('button');
    let elButton3 = document.createElement('button');



    // setAttribute

    elItem.setAttribute('class', 'd-grid  w-sm-50 mb-2');
    elItem.setAttribute('width', '341');
    elItem.setAttribute('height', '407');
    elDiv.setAttribute('class', 'card pb-2');
    elImg.setAttribute('class', 'card-img-top');
    elImg.setAttribute('src', `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`);
    elImg.setAttribute('width', '340');
    elImg.setAttribute('height', '191');
    elDiv2.setAttribute('class', 'card-body');
    elDiv2.setAttribute('style', 'width: 341px;');
    elH4.setAttribute('class', 'card-title');
    elPi.setAttribute('class', 'card-text');
    elDiv3.setAttribute('class', 'd-flex justify-content-between');
    elButton1.setAttribute('class', 'btn btn-outline-primary');
    elButton2.setAttribute('class', 'btn btn-outline-success');
    elButton3.setAttribute('class', 'btn btn-outline-info');

    // Text content

    elH4.textContent = item.Title;
    elSpan.textContent = item.movie_year;
    elPi2.textContent = item.imdb_rating;
    elButton1.textContent = 'Watch trailer';
    elButton2.textContent = 'Mory info';
    elButton3.textContent = 'Bookmark';



    // Appendchild
  elList.appendChild(elItem);
  elItem.appendChild(elDiv);
  elDiv.appendChild(elImg);
  elDiv.appendChild(elDiv2);
  elDiv2.appendChild(elH4);
  elDiv2.appendChild(elPi);
  elPi.appendChild(elSpan)
  elDiv2.appendChild(elPi2);
  elDiv2.appendChild(elDiv3);
  elDiv3.appendChild(elButton1);
  elDiv3.appendChild(elButton2);
  elDiv3.appendChild(elButton3);
}

}

sliceMovies(movies)

// movie year render

elForm.addEventListener('submit', function(e){
    
    e.preventDefault();
   let year = elFormYear.value
  
   let newMoviesArr =  movies.filter(movie => movie.movie_year >= year)
 
   sliceMovies(newMoviesArr)
 
   elCount.textContent = newMoviesArr.length;

})



