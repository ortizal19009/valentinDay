$(document).ready(() => {
  repeatEsferas();
  photos();
});

function repeatEsferas() {
  const $esferas =
    "<div class='circle-container'><div class='circle'></div></div>";

  for (let i = 0; i <= 500; i++) {
    $("#container").append($esferas);
  }
}
function photos() {
  const $photoList = [
    {
      name: "photo-1",
      url: "./img/photo-1.jpg",
    },
    {
      name: "photo-2",
      url: "./img/photo-2.jpg",
    },
    {
      name: "photo-3",
      url: "./img/photo-3.jpg",
    },
    {
      name: "photo-4",
      url: "./img/photo-4.jpg",
    },
    {
      name: "photo-5",
      url: "./img/photo-5.jpg",
    },
    {
      name: "photo-6",
      url: "./img/photo-6.jpg",
    },
    {
      name: "photo-7",
      url: "./img/photo-7.jpg",
    },
    {
      name: "photo-8",
      url: "./img/photo-8.jpg",
    },
    {
      name: "photo-9",
      url: "./img/photo-9.jpg",
    },
    {
      name: "photo-10",
      url: "./img/photo-10.jpg",
    },
    {
      name: "photo-11",
      url: "./img/photo-11.jpg",
    },
    {
      name: "photo-12",
      url: "./img/photo-12.jpg",
    },
    {
      name: "photo-13",
      url: "./img/photo-13.jpg",
    },
    {
      name: "photo-14",
      url: "./img/photo-14.jpg",
    },
    {
      name: "photo-15",
      url: "./img/photo-15.jpg",
    },
    {
      name: "photo-16",
      url: "./img/photo-16.jpg",
    },
    {
      name: "photo-17",
      url: "./img/photo-17.jpg",
    },

  ];
  var mapListPhotos = $photoList.map((photo)=>{
    return (`<div class='carousel-item'><img src= ${photo.url} class='d-block w-100' alt= ${photo.name}></div>` );
  });
  $('#carousel-inner').append(mapListPhotos);

}
