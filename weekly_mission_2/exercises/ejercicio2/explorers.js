const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

//Sobre esta lista, realiza lo siguiente:

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
function getNames() {
  explorers.forEach((explorer) => {
    return explorer.name;
  });
}

// Imprime el stack de cada explorer, usa FOR EACH
function getStack() {
  explorers.forEach((explorer) => {
    console.log(`Stack de ${explorer.name}: ${explorer.stack}`);
  });
}
getStack();

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStacks = explorers.map((explorer) => explorer.stack);
console.log("Creando lista de stacks con map: ", explorerStacks);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stacks = explorers.filter((explorer) => explorer.stack.includes("js"));
console.log("Objetos que incluyen JS", stacks);

// Busca el primer explorer que sea de la CDMX, usa FIND
const findCity = explorers.find((location) => location.city === "CDMX");
console.log(`${findCity.name} es el primero de ${findCity.city}`);

// Obtén la suma de todos los exercises_completed, usa REDUCE
const result = explorers.reduce(
  (acc, exercises) => acc + exercises.exercises_completed,
  0
);
console.log("Suma de todos los ejercios resueltos: ", result);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const exerciseFinished = explorers.some(
  (exercices) => exercices.missions.frontend.exercisesFinished === true
);
console.log(
  "Algún explorer ha finalizado la misión frontend? ",
  exerciseFinished
);

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const onBoarding = explorers.every(
  (explorer) => explorer.missions.onboarding.isFinished === true
);
console.log("¿Todos los explorers terminaron el on boardring? ", onBoarding);
