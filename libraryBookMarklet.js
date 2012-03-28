<a href="javascript: (function() {
  var txt = window.getSelection().toString();
  var searchString = txt.replace(/\s/g, '+');
  window.location = 'http://www.torontopubliclibrary.ca/search.jsp?Ntt=' + encodeURIComponent(searchString);
})();">Search Library</a>
