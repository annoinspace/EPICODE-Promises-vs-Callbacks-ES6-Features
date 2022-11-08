const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer [563492ad6f917000010000015aa03bb932984aafad429ad9c76e61af]"
  }
}

fetch("https://api.pexels.com/v1/search?query=nature", {
  headers: {
    Authorization: "563492ad6f917000010000015aa03bb932984aafad429ad9c76e61af"
  }
})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
