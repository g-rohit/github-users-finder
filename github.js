// Client ID
//     9dfe1781300341027569
// Client Secret
//     e6b3590485c1648cf9fea9724f0d4e312cc4a640

// create the Github class

class Github {
  constructor() {
    this.client_id = "9dfe1781300341027569";
    this.client_secret = "e6b3590485c1648cf9fea9724f0d4e312cc4a640";
    this.sort = "created: asc";
    this.limit = "5";
  }

  //   getting the profile data from github api, async and then the function name:

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.limit}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}