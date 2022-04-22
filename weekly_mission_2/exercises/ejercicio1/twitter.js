const profile = {
    name: "Eduardo Nieto",
    username: "@edunietoa",
    password: "password",
    email: "edjnieto@gmail.com",
    bio: "Explorer en LaunchX",
    birthDate: "28-11-1990",
    location: "Mérida, Yucatán, México",
    socialMedia: ["fb.me/eduardo.nieto1","instagram.com/wayonieto"],
    picture: "",
    creationDate: "2015-11",
    cover: "",
    totalTweets: 100,
    getProfileInfo: function () {
        return`
        ${this.name}
        ${this.username}
        ${this.bio}
        ${this.location}
        `
    }
};

const tweet = {
    date: Date.now(),
    associatedUsername: profile.username,
    associatedName: profile.name,
    profilePicture: profile.picture,
    content: "Hola ese es mi tweet",
    likes: 20,
    totalRetweets: 5,
    totalResponses: 8,
    publishTweet: function () {
        return `
        ${this.associatedName} ${this.associatedUsername} ${this.date}
        ${this.content}
        ${this.likes} <3 ${this.totalRetweets} RT`
    }
};

const explore = {
    tabs: ["for-you", "trending", "covid-19", "news"],
    trending: {
        category:["trendig","politics","sports" ],
        title: "Ukraine",
        content: "Russian invasion of Ukraine.",
        totalTweets: 4500
    },
    search: "",
    getTrendingTopics: function () {
        return `
        ${this.trending.title}
        ${this.trending.content}
        Tweets: ${this.trending.totalTweets}`
    }
};

console.log(profile.getProfileInfo());
console.log(tweet.publishTweet());
console.log(explore.getTrendingTopics());


