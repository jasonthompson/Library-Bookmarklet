#Search Library Bookmarklet

Select author's name or book title on any web page and click on the bookmarklet to search the Toronto Public Library.

##Future Directions

*search other libraries
*search retailers like Amazon or Indigo.

##Installation

Drag this link to your bookmark bar: <a href="javascript: (function() {
  var txt = window.getSelection().toString();
  var searchString = txt.replace(/\s/g, '+');
  window.location = 'http://www.torontopubliclibrary.ca/search.jsp?Ntt=' + encodeURIComponent(searchString);
})();">Search Library</a>

