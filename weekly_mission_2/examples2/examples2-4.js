// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.stars = stars;
  }

  getInfo() {
    // es una función que ejecutará cualquier objeto instanciado de esta clase
    //regresa un string con la inrormación del constructor this.[atributo]
    return `Repository ${this.name} from ${this.author} has ${this.stars} stars`;
  }
}
console.log("Ejemplo 4: Métodos en los objetos");
const myRepo = new Repository("LaunchX", "EduNieto", "Vue", 100);
console.log(myRepo.getInfo());
