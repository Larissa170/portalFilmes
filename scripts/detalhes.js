const APIKEY = "a67bae5684a4c439bddc5967fc090eb6";

const ENDPOINT = "https://api.themoviedb.org/3";

const IMGS = "https://image.tmdb.org/t/p/w500";

const PARAMS = new URLSearchParams(window.location.search);
let id = PARAMS.get("id");

window.addEventListener("DOMContentLoaded", () => {
  fetch(`${ENDPOINT}/movie/${id}?api_key=${APIKEY}&language=pt-BR`)
    .then((res) => res.json())
    .then((data) => {
      let str = `<div class="col-12 mb-2">
          <h4 class="text-center ">${data.original_title}</h4>
        </div>
        <div class="row">
          <div class="col-md-5">            
            <img src="${IMGS}${data.poster_path}" alt="Poster Filme" class="card-img-top mb-1"/>
          </div>  
          <div class="detalhe-filme col-md-7">
            <p class="text-center mt-2"><span>${data.tagline}</span></p> 
            <p><span>Sinopse: </span>${data.overview}</p>
            <p><span>Lançamento: </span>${data.release_date}</p> 
            <p><span>Tempo de Execução: </span>${data.runtime} minutos</p> 
            <p><span>Titulo em português: </span> ${data.title}</p>                          
          </div>
        </div>
      </div>`;

      document.getElementById("detalhes").innerHTML = str;
    })

    .catch((err) => console.log(`ERRO: ${err.message}`));
});
