export default class Pokemon {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Mi pokémon ${this.name} te saluda!!!`);
  }
}