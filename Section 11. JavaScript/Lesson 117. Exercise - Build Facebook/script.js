const database = [
  {
    username: "SendPie",
    password: "ILikeHashesBetter"
  }
];

const newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Mayuko",
    timeline: "Just got 4 billion subscribers!"
  }
];

const userNamePrompt = prompt("What is your username?");
const passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    newsFeed.forEach(feed => {
      console.log(`${feed.username}: ${feed.timeline}`);
    });
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
