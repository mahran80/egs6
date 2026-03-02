var state = {
  selectedUserId: null,
  posts: [],
  searchText: ""
};

function applyFilter(posts, searchText) {
  var q = searchText.trim().toLowerCase();
  if (q === "") return posts;
  return posts.filter(function(post) {
    return post.title.toLowerCase().includes(q);
  });
}