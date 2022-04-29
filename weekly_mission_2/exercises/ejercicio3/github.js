class repo {
    constructor (name, autor, language){
        this.name = name;
        this. autor = autor;
        this.language = language;
        this.numberOfCommits = 0;
        this.stars = 0;
        this.forks = 0;
        this.issues_open = 0;
        this.issues_closed = 0;
    }
    get getnumberOfCommits() {
        return this.numberOfCommits
    }
    get getStars() {
        return this.stars
    }
    get getForks() {
        return this.forks
    }
    get getIssues_open() {
        return this.issues_open
    }
    get getIssues_closed() {
        return this.issues_closed
    }
    set setNumberOfCommits(numberOfCommits) {
        this.numberOfCommits = numberOfCommits
    }
    set setStars(stars) {
        this.stars = stars
    }
    set setForks(forks) {
        this.forks = forks
    }
    set setIssues_open(issues_open) {
        this.issues_open = issues_open
    }
    set setIssues_closed(issues_closed) {
        this.issues_closed = issues_closed
    }
    getInfo() {
        return `
        El repositorio: ${this.name}, creado por: ${this.autor}
        usa lenguaje: ${this.language}
        Stars: ${this.stars}
        Forks: ${this.forks}
        Issues:
        opened: ${this.issues_open} closed: ${this.issues_closed}`
    }
}
const repositorio = new repo('LaunchX', 'EduNieto', 'JavaScript');
repositorio.setForks = 2;
repositorio.setNumberOfCommits = 100;
repositorio.setIssues_open = 1;
repositorio.setIssues_closed = 1;
console.log(repositorio.getInfo());
