const minigames = () => {
  fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then((response) => {
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    })
    .then((data) => {
      if (typeof data == "number") {
        alert(data);
      } else {
        for (let i = 0; i < data.length; i++) {
          const currentData = data[i];
          const newListItem = document.createElement("li");
          newListItem.classList.add("card");
          newListItem.setAttribute("id", "card");
          const genre_array = currentData.genre;
          let genre_string = genre_array[0];
          if (genre_array.length > 1) {
            for (let j = 1; j < genre_array.length; j++) {
              genre_string = genre_string + ", " + genre_array[j];
            }
          }
          const games =
            '<div class="name">' +
            currentData.name +
            "</div>" +
            '<img src="' +
            currentData.icon +
            '"/>' +
            "<div>Genre: " +
            genre_string +
            "</div>" +
            '<div class="detail">' +
            currentData.description +
            "</div>" +
            '<a href="' +
            currentData.icon +
            '" target="_blank">View</a>';
          games.trim();
          newListItem.innerHTML = games;
          document.getElementById("minigames").appendChild(newListItem);
        }
      }
    });
};
const assets = () => {
  fetch("https://gamertocoder.garena.co.th/api/assets")
    .then((response) => {
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    })
    .then((data) => {
      if (typeof data == "number") {
        alert(data);
      } else {
        Banner = data.banner;
        Logo = data.logo;
        Wallpaper = data.wallpaper;
        Characters = data.characters;
        Benny = data.benny;
        document.getElementById("blockManImg").src = Logo[0];
        document.getElementById("blockManImg2").src = Benny[0];
        document.getElementById("head").appendChild =
          '<link rel="icon" type="image/x-icon" href="' + Benny[0] + '">';
        for (let i = 0; i < Characters.length; i++) {
          const currentData = Characters[i];
          const newListItem = document.createElement("li");
          newListItem.classList.add("card");
          newListItem.classList.add("char");
          newListItem.setAttribute("id", "card");
          const chars = '<img src="' + currentData + '"/>';
          chars.trim();
          newListItem.innerHTML = chars;
          document.getElementById("characters").appendChild(newListItem);
        }
      }
    })
    .then(() => {
      let slide = document.createElement("script");
      slide.src = "js/slide.js";
      document.body.appendChild(slide);
    });
};
minigames();
assets();
