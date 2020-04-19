// JS
console.log("scripts");

let allLinks = document.querySelectorAll("a");
var allDividers = document.querySelectorAll("divider");
console.log(allLinks);

fetch("./components/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./components/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

fetch("./components/container1.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".somediv").innerHTML = data;
  });

fetch("./components/divider.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    allDividers.forEach((element) => {
      element.innerHTML = data;
    });
  });
