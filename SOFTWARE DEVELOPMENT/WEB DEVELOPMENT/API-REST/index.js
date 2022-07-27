
const dom = document;
const img1 = dom.querySelector('.dog_image1')
const img2 = dom.querySelector('.dog_image2')
const img3 = dom.querySelector('.dog_image3')
const URL =
  "https://api.thedogapi.com/v1/images/search?limit=3&api_key=4efa222c-8c8f-4766-9788-c74e2aa12bf8";
const btn = dom.getElementById("recarga_img");
console.log(btn)


const reset = () => {
  fetch(URL)
    .then(res => {
      return res.ok === true ? res.json() : Promise.reject(res)
    })
    .then(json => {
        console.log(json)
        img1.src = json[0].url;
        img2.src = json[1].url;
        img3.src = json[2].url;
    })
    .catch(error => {
      console.log(error)
    })
    .finally()
}

btn.addEventListener("click",()=>reset())

reset()