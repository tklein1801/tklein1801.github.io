const project_names = [
  {
    name: "A3RLRPG-Infoapp",
    order: 1,
  },
  {
    name: "A3RLRPG-Infopanel",
    order: 2,
  },
  {
    name: "DulliBot",
    order: 3,
  },
  {
    name: "tklein1801.github.io",
    order: 4,
  },
  {
    name: "BBS-Mitfahrzentrale",
    order: 5,
  },
  {
    name: "BBS-Grid-Website",
    order: 6,
  },
  {
    name: "Amazon-Price-Checker",
    order: 7,
  },
  {
    name: "ShoutBox",
    order: 8,
  },
  {
    name: "Context-Menu",
    order: 9,
  },
];
(async () => {
  var project_list = [];
  project_list.fill({}, 0, project_names.length);

  // Get private repos
  var private = await fetch("https://api.github.com/users/tklein1801/repos");
  var private_repos = await private.json();

  // Get public dulliag repos
  var org = await fetch("https://api.github.com/orgs/dulliag/repos");
  var org_repos = await org.json();

  private_repos.forEach((repo) => {
    var match = project_names.filter((project) => project.name == repo.name),
      isWanted = match.length == 1;
    if (isWanted) project_list[match[0].order - 1] = repo;
  });

  org_repos.forEach((repo) => {
    var match = project_names.filter((project) => project.name == repo.name),
      isWanted = match.length == 1;
    if (isWanted) project_list[match[0].order - 1] = repo;
  });

  project_list.forEach((repo) => {
    var desc = repo.description !== null ? repo.description : "Keine Beschreibung";
    document.querySelector("#projects").innerHTML += `<div class="project-card">
      <div>
        <h4 class="repo-name">
          <a href="${repo.owner.html_url}" class="repo-link">@${repo.owner.login}</a>/<a href="${repo.html_url}" class="repo-link">${repo.name}</a>  
        </h4>
        <p class="repo-description">${desc}</a>
        <div class="repo-info row">
          <div>
            <i class="far fa-file-alt"></i>
            <p>${repo.language}</p>
          </div>
          
          <div>
            <a href="${repo.html_url}/stargazers" class="repo-link row">
              <i class="far fa-star"></i>
              <p>${repo.stargazers_count}</p>
            </a>
          </div>

          <div>
            <a href="${repo.html_url}/network/members" class="repo-link row">
              <i class="fas fa-code-branch"></i>
              <p>${repo.forks_count}</p>
            </a>
          </div>
        </div>
      </div>
    </div>`;
  });
})();
