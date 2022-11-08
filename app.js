// const options = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer [563492ad6f917000010000015aa03bb932984aafad429ad9c76e61af]"
//   }
// }

let cardRow = document.querySelector("body > main > div > div > div")
function hideImage() {
  let buttonRow = event.target.parentElement
  let buttoncontainer = buttonRow.parentElement
  let cardText = buttoncontainer.parentElement
  let card = cardText.parentElement
  card.classList.add("d-none")
}

const loadPictures = () => {
  fetch("https://api.pexels.com/v1/search?query=nature", {
    headers: {
      Authorization: "563492ad6f917000010000015aa03bb932984aafad429ad9c76e61af"
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      cardRow.innerHTML = ""
      console.log(data.photos)

      for (img of data.photos) {
        cardRow.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${img.src.medium}" style="width=100%;
        height=225px; object-fit: contain"/>
          
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="hideImage()"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${img.id}</small>
            </div>
          </div>
        </div>
      </div>`
      }
    })
}

const loadSecondPic = () => {
  fetch("https://api.pexels.com/v1/search?query=architecture", {
    headers: {
      Authorization: "563492ad6f917000010000015aa03bb932984aafad429ad9c76e61af"
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      cardRow.innerHTML = ""
      console.log(data.photos)

      for (img of data.photos) {
        cardRow.innerHTML += `
          <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src="${img.src.medium}" />
            
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideImage()"
                  >
                    Hide
                  </button>
                </div>
                <small class="text-muted">${img.id}</small>
              </div>
            </div>
          </div>
        </div>`
      }
    })
}

// let placeholderContainer = document.querySelector("body > main > div")
// let loadButton = document.querySelector(
//   "body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2"
// )

// let svgElement = document.querySelector(
//   "body > main > div > div > div > div:nth-child(1) > div > svg"
// )

// loadButton.addEventListener("click", getPhotos)

// loadButton.onclick = function () {
//   placeholderContainer.classList.add("d-none")
//   images.map((image) => {
//     svgElement.innerHTML = `<img src=${image.src.tiny} />`
//   })
// }

// function getPhotos(images) {
//   placeholderContainer.classList.add("d-none")
//   images.map((image) => {
//     svgElement.innerHTML = `<img src=${image.src.tiny} />`
//   })
// }
