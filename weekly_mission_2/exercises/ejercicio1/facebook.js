const user = {
  email: "edjnieto@hotmail.com",
  username: "eduardo.nieto1",
  name: "Eduardo Nieto",
  password: "password",
  picture: "profile.jpg",
  getUserInfo: function () {
    return `
      Foto: ${this.picture}
      Nombre: ${this.name}
      e-mail: ${this.email}
      `;
  },
};

const profile = {
  name: user.name,
  totalPosts: 1000,
  info: "",
  totalFriends: 300,
  totalPhotos: 1000,
  totalVideos: 50,
  getProfileInfo: function () {
    return `
      ${this.name}
      Posts: ${this.totalPosts}
      Amigos: ${this.totalFriends}
      Fotos: ${this.totalPhotos}
      `;
  },
};

const posts = {
  name: user.name,
  picture: user.picture,
  content: "Este es una publicacion de facebook",
  date: Date.now(),
  totalLikes: 25,
  totalComments: 12,
  facebookPost: function () {
    return `
        ${this.name} ${this.date}
        ${this.content}
        ${this.totalLikes} ${this.totalComments}
        `;
  },
};

const marketplace = {
  categories: ["vehiculos", "propiedades", "electronica", "mascotas"],
  product: {
    picture: "product.jpg",
    price: 99.9,
    name: "Buzz Lightyear",
    description: "Figura de acción Toy Story",
    location: "merida, yucatán",
  },
  getCategories: function () {
    this.categories.forEach((category) => {
      return console.log(category);
    });
  },
  productPost: function () {
    return `
      ${this.product.picture}
      $ ${this.product.price}
      ${this.product.name}
      ${this.product.description}
      ${this.product.location}
      `;
  },
};

console.log(user.getUserInfo());
console.log(profile.getProfileInfo());
console.log(marketplace.getCategories());
console.log(marketplace.productPost());
