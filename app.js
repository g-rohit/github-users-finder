// init Github
const github = new Github();
// init UI
const ui = new UI();
//
// target input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // get the value from the input
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
         
console.log('data:');
console.log(data);

        if (data.profile.message === "Not Found") {
            ui.showError(data.profile);
        } else {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
            
            console.log(data.repos);
    }
    });
  } else {
    ui.clearProfile();
  }
});
