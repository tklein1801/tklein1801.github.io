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
        if (item.show != false) {
          var github, demo, image;

          image = item.image != false ? item.image : "./assets/data/images/placeholder.png";

          demo =
            item.demo != false
              ? `<a href="${item.demo}" target="_blank" data-toggle="cs-tooltip" data-placement="top" data-content="${item.demo}"><i class="fab fa-chrome"></i> Demo</a>`
              : `<a data-toggle="cs-tooltip" data-placement="top" data-content="Disabled"><i class="fab fa-chrome"></i> Demo</a>`;
          github =
            item.github != false
              ? `<a href="${item.github}" target="_blank" data-toggle="cs-tooltip" data-placement="top" data-content="${item.github}"><i class="fab fa-github"></i> GitHub</a>`
              : `<a data-toggle="cs-tooltip" data-placement="top" data-content="Disbled"><i class="fab fa-github"></i> GitHub</a>`;
          document.querySelector(
            "#my-projects #output"
          ).innerHTML += `<div class="col-md-4" data-aos="zoom-in">
            <div class="cs-card mb-4">
              <div class="card-header">
                <img
                  class="rounded"
                  src="${image}"
                  alt="Projectimage"
                />
              </div>
              <div class="card-body rounded">
                <div class="col-12 mb-3">
                  <h5 class="project-title">${item.name}</h5>
                </div>
                <div class="col-12">
                  ${demo}
                  ${github}
                  </div>
              </div>
            </div>
          </div>`;
        }
      });
    });
  }
}
