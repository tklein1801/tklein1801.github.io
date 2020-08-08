class Skills {
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
        if (item.type == "skill") {
          document.querySelector(
            "#about-me #skills"
          ).innerHTML += `<li class="skill-item" data-aos="zoom-out-up" data-aos-delay="300">${item.icon} ${item.name}</li>`;
        } else {
          document.querySelector(
            "#about-me #frameworks"
          ).innerHTML += `<li class="skill-item" data-aos="zoom-out-up" data-aos-delay="300">${item.icon} ${item.name}</li>`;
        }
      });
    });
  }
}
