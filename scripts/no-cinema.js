const APIKEY = "a67bae5684a4c439bddc5967fc090eb6";

const ENDPOINT = "https://api.themoviedb.org/3";

const IMGS = "https://image.tmdb.org/t/p/w500";

window.addEventListener("DOMContentLoaded", () => {
  fetch(`${ENDPOINT}/movie/now_playing?api_key=${APIKEY}&language=pt-BR`)
    .then((res) => res.json())
    .then((data) => {
      let str = "";
      str += `<h2 class="text-center my-3"> No Cinema</h2>`;
      for (x = 0; x < data.results.length; x++) {
        str += `
        <div class="col-sm-4 mb-2">
          <div class="card style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-center ">${data.results[x].original_title}</h5>
                <img src="${IMGS}${data.results[x].poster_path}" alt="Poster Filme" class="card-img-top mb-1"/>
                <p> Sinopse: ${data.results[x].overview}</p>
                <p>Lançamento: ${data.results[x].release_date}</p>                
                <a class="btn btn-light" href="detalhes.html?id=${data.results[x].id}" target="_blank">Detalhes</a> 
              </div>
            </div>
        </div>`;
      }

      document.getElementById("filmes-no-cinema").innerHTML = str;
    })

    .catch((err) => console.log(`ERRO: ${err.message}`));
});

const elem = document.getElementById("btn-pesquisa");

elem.addEventListener("click", () => {
  let busca = document.getElementById("buscar").value;
  fetch(
    `${ENDPOINT}/search/movie?api_key=${APIKEY}&query=${busca}&language=pt-BR`
  )
    .then((res) => res.json())
    .then((data) => {
      let str = "";
      str += `<h2 class="my-3"> Filmes encontrados </h2>`;
      for (x = 0; x < data.results.length; x++) {
        str += `
        <div class="col-sm-4 mb-2">
          <div class="card style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-center ">${data.results[x].original_title}</h5>
                <img src="${IMGS}${data.results[x].poster_path}" alt="Poster Filme" class="card-img-top mb-1"/>
                <p> Sinopse: ${data.results[x].overview}</p>
                <p>Lançamento: ${data.results[x].release_date}</p>                
                <a class="btn btn-light" href="detalhes.html?id=${data.results[x].id}" target="_blank">Detalhes</a> 
              </div>
            </div>
        </div>`;
      }

      document.getElementById("filmes-no-cinema").innerHTML = str;
    })

    .catch((err) => console.log(`ERRO: ${err.message}`));
});
