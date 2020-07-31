class Treelink {
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
        document.querySelector(
          "#links"
        ).innerHTML += `<button class="treelink" onclick="js:location.href='${item.url}'">
          ${item.icon} ${item.name}
        </button>`;
      });
    });
  }
}
