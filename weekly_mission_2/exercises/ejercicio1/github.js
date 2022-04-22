const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
  issue: {
    title: "First issue",
    repositoryNameAssociated: repo.name,
    status: "open",
    numberOfComments: 15,
    labels: ["issue", "help", "advice"],
    author: "EduNieto",
    dateCreated: "10-04-2022",
    dateUpdated: "20-04-2022",
    getTitleAndAuthor: function () {
      return `Nombre del issue: ${this.title}, Autor: ${this.author}`;
    },
    getGeneralInfo: function () {
      return `
      Issue: ${this.title} 
      del repo: ${this.repositoryNameAssociated} 
      creado el ${this.dateCreated}. 
      Ultima actualización ${this.dateUpdated}
    `;
    },
  },
  pullRequest: {
    title: "First PR",
    branchName: "main",
    dateCreated: "22-04-2022",
    status: "open",
    repositoryNameAssosiated: repo.name,
    getStatus: function () {
      return this.status;
    },
    getTitleAndAuthor: function () {
      return `
    Title: ${this.title},
    Author: ${this.author}`;
    },
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
console.log(issue.getGeneralInfo());
