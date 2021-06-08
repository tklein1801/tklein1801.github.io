class Projects {
  getItems(path, callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", path, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
  }

  init(path) {
    this.getItems(path, function (response) {
      const data = JSON.parse(response);
      data.forEach((item) => {
        if (item.show) {
          var placeholder = "./assets/data/images/placeholder.png",
            projectName = item.name,
            demo = "",
            repo = "";

          if (item.image !== null) placeholder = item.image;
          if (item.demo !== null)
            demo = `<a href="${item.demo}" target="_blank"><i class="fab fa-chrome"></i> Preview</a>`;
          if (item.github !== null)
            repo = `<a href="${item.github}" target="_blank"><i class="fab fa-github"></i> Repository </a>`;

          document.querySelector(
            "#my-projects #output"
          ).innerHTML += `<div class="col-md-4" data-aos="zoom-in">
            <div class="cs-card mb-4">
              <div class="card-header">
                <img
                  class="rounded"
                  src="${placeholder}"
                  alt="Project-image"
                  loading="lazy"
                />
              </div>
              <div class="card-body rounded">
                <div class="col-12 mb-3">
                  <h5 class="project-title">${projectName}</h5>
                </div>
                <div class="col-12">
                  ${demo}
                  ${repo}
                </div>
              </div>
            </div>
          </div>`;
        }
      });
    });
  }
}
