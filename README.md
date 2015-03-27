[![Build Status](https://travis-ci.org/TarCode/ListApi.svg?branch=master)](https://travis-ci.org/TarCode/ListApi)
#List API seed

Linked lists are a very basic data structure that form the cornerstone of many
data structures in common use on the Internet today. In this exercise, you
will be filling out an existing API in order to get all the test cases to
pass.

The test cases can be run in your browser. Follow the
instructions below to get going:

* Fork this repo and clone it to your machine
* Open the file called `test-setup.html` in your browser.
* Open the ```list.js``` and ```list-test.js``` files in a text editor.
* Refresh your browser each time you make (and save) a change to see how your code passes tests
* When the tests go green, you are done!

The [API](http://en.wikipedia.org/wiki/Application_programming_interface)
allows basic manipulation of a singly linked list. For example:

```javascript
  var l = new List()
  l.add("a")
  l.add("b")
  l.add("c")
  var d = l.pop()              // d === "c"
  var h = l.head()             // h === "b"
  var len = list.length()      // len === 2

```

The idea of this exercise is to first understand how the list works by reading
the code. We store the list as a a linked list if ```Item()``` types wrapped
in a ```List()``` object and work from there. Each function that you need to
implement has been declared for you and the comments above each one should
tell you what that function is supposed to do. We will also go through the API
in class.


