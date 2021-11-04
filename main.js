const resBtn = document.querySelector("button");
const getPlanetInfo = () => {
      axios.get("https://swapi.dev/api/planets/2/")
      .then(response => {
        //console.log(response.data);
        for(let i = 0; i < response.data.residents.length; i++) {
            axios.get(`${response.data.residents[i]}`)
            .then(res => {
                //console.log(`${res.data.name}`);
                const header = document.createElement("h2");
                header.textContent = res.data.name;
                const div = document.createElement("div");
                div.appendChild(header);
                const body = document.querySelector("body");
                body.appendChild(div);

            })
            .catch(error => {
                console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
}

resBtn.addEventListener("click", getPlanetInfo);
