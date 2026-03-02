function setLoading(show) {
  var el = document.getElementById("loading");
  if (show) {
    el.classList.remove("d-none");
  } else {
    el.classList.add("d-none");
  }
}

function showAlert(message) {
  var box = document.getElementById("alert-box");
  box.textContent = "⚠ " + message;
  box.classList.remove("d-none");
}

function hideAlert() {
  document.getElementById("alert-box").classList.add("d-none");
}

function renderUsers(users) {
  var select = document.getElementById("users-select");
  select.innerHTML = "<option value=''>— Select a contributor —</option>";
  for (var i = 0; i < users.length; i++) {
    var opt = document.createElement("option");
    opt.value = users[i].id;
    opt.textContent = users[i].name;
    select.appendChild(opt);
  }
}

function renderPosts(posts) {
  var container = document.getElementById("posts-container");
  var emptyBox  = document.getElementById("empty-box");
  var label     = document.getElementById("section-label");

  container.innerHTML = "";
  hideAlert();

  if (posts.length === 0) {
    emptyBox.classList.remove("d-none");
    label.classList.add("d-none");
    return;
  }

  emptyBox.classList.add("d-none");
  label.classList.remove("d-none");

  for (var i = 0; i < posts.length; i++) {
    var card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML =
      "<div class='post-number'>No. " + String(i + 1).padStart(2, "0") + "</div>" +
      "<div class='post-divider'></div>" +
      "<div class='post-title'>" + posts[i].title + "</div>" +
      "<div class='post-body'>" + posts[i].body + "</div>";
    container.appendChild(card);
  }
}