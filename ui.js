// UI class

class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
         <div class="p-4 rounded shadow-lg">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="${
                                      user.avatar_url
                                    }" class="img-fluid rounded mb-2" alt="${
      user.name
    }">
                                    <a href="${user.html_url}" target="_blank"
                                        class="btn btn-secondary btn-block mb-3">View
                                        Profile</a>
                                </div>
                                <div class="col-md-9">
                                    <span class="badge badge-primary">Public Repos: ${
                                      user.public_repos
                                    }</span>
                                    <span class="badge badge-warning">Gists: ${
                                      user.public_gists
                                    }</span>
                                    <span class="badge badge-info">Followers: ${
                                      user.followers
                                    }</span>
                                    <span class="badge badge-success">Following: ${
                                      user.following
                                    }</span>
                                    <br><br>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            Full name: ${user.name}
                                        </li>
                                        <li class="list-group-item">
                                            Company: ${user.company}
                                        </li>
                                        <li class="list-group-item">
                                            Website/Blog: <a href="${
                                              user.blog
                                            }" target="_blank"
                                                class="btn btn-light">${
                                                  user.blog
                                                }</a>
                                        </li>
                                        <li class="list-group-item">
                                            Location: ${user.location}
                                        </li>
                                        <li class="list-group-item">
                                            Member since: ${user.created_at.slice(0,10)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col">
                                    <h3 class="m-3 font-weight-bold">Latest Repos</h3>
                                    <div id="repos"></div>
                                </div>
                            </div>
                        </div>
        `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
    <ul class="list-group">
                                        <li class="list-group-item">
                                        ${repo.name}: <a href="${repo.html_url}" target="_blank" class="btn btn-light">${repo.html_url}</a> 
                                        <span class="badge badge-dark">Watchers: ${
                                            repo.watchers_count
                                          }</span>  
                                          <span class="badge badge-dark">Stars: ${
                                            repo.stargazers_count
                                          }</span>
                                          <span class="badge badge-dark">Forks: ${
                                            repo.forks_count
                                          }</span>
                                        </li>
                                     </ul>
    `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showError(user) {
    this.profile.innerHTML = `<p class="error">Oops, Account with this username doesn't exist</p>`;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
