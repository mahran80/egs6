function debounce(fn, delay) {
  var timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

function loadPosts(userId) {
  setLoading(true);
  getPostsByUser(userId)
    .then(function(posts) {
      state.posts = posts;
      var filtered = applyFilter(posts, state.searchText);
      renderPosts(filtered);
    })
    .catch(function(err) {
      showAlert("Failed to load posts: " + err.message);
    })
    .finally(function() {
      setLoading(false);
    });
}

function init() {
  setLoading(true);
  getUsers()
    .then(function(users) {
      renderUsers(users);
    })
    .catch(function(err) {
      showAlert("Failed to load contributors: " + err.message);
    })
    .finally(function() {
      setLoading(false);
    });
}

var usersSelect = document.getElementById("users-select");
var searchInput = document.getElementById("search-input");
var reloadBtn   = document.getElementById("reload-btn");

usersSelect.addEventListener("change", function() {
  var id = usersSelect.value;
  if (id === "") return;
  state.selectedUserId = id;
  state.searchText = "";
  searchInput.value = "";
  loadPosts(id);
});

searchInput.addEventListener("input", debounce(function() {
  state.searchText = searchInput.value;
  var filtered = applyFilter(state.posts, state.searchText);
  renderPosts(filtered);
}, 300));

reloadBtn.addEventListener("click", function() {
  if (state.selectedUserId) {
    loadPosts(state.selectedUserId);
  } else {
    init();
  }
});

init();