(async () => {
  var package_list = [];
  var response = await fetch(`https://api.npms.io/v2/search?q=author:tklein1801`);
  var json = await response.json();
  package_list = json.results;

  if (package_list.length == 0) {
    document.querySelector("#packages").innerHTML += `<div class="package-card">
        <div>
          <h4 class="repo-name text-center mb-0">No packages found</h4>
        </div>
    </div>`;
    return;
  }

  package_list.forEach((package) => {
    var class_list = "repo-name",
      desc = "",
      keywords = "";
    if (package.package.keywords !== undefined) {
      package.package.keywords.forEach(
        (word) => (keywords += `<span class="keyword">${word}</span>`)
      );
    }
    if (package.package.description !== undefined) {
      desc = `<p class="repo-description">${package.package.description}</p>`;
    }

    if (desc == "" && keywords == "") class_list += " mb-0";
    document.querySelector("#packages").innerHTML += `<div class="package-card">
      <div>
        <h4 class="repo-name mb-0">
          <a href="${package.package.links.npm}" class="repo-link">${package.package.name} v${package.package.version}</a>
        </h4>
      </div>
    </div>`;

    // document.querySelector("#packages").innerHTML += `<div class="package-card">
    //   <div>
    //     <h4 class="${class_list}">
    //       <a href="${package.package.links.npm}" class="repo-link">${package.package.name} v${package.package.version}</a>
    //     </h4>
    //     ${desc}
    //     <div class="keyword-container row">
    //       ${keywords}
    //     </div>
    //   </div>
    // </div>`;
  });
})();
