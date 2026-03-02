var BASE = "https://jsonplaceholder.typicode.com";

function getUsers() {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", BASE + "/users", true);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          resolve(JSON.parse(req.responseText));
        } else {
          reject(new Error("HTTP " + req.status));
        }
      }
    };
    req.send();
  });
}

function getPostsByUser(userId) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", BASE + "/posts?userId=" + userId, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          resolve(JSON.parse(req.responseText));
        } else {
          reject(new Error("HTTP " + req.status));
        }
      }
    };
    req.send();
  });
}