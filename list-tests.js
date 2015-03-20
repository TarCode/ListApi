
QUnit.test("A new list is empty", function (assert) {
	var l = new List()
  assert.equal(l.empty(), true)
  assert.equal(l.head(), null)
});

QUnit.test("It is really a list", function (assert) {
  var l = new List()
  l.add("a")
  l.add("b")
  l.add("c")
  assert.equal(l.item.data, "c")
  assert.equal(l.item.tail.data, "b")
  assert.equal(l.item.tail.tail.data, "a")
  assert.equal(l.item.tail.tail.tail, null)
});

QUnit.test("Head of the list contains most recent addition", function (assert) {
  var l = new List()
  l.add("a")
  assert.equal(l.head(), "a")
  l.add("b")
  assert.equal(l.head(), "b")
  l.add("c")
  l.add("d")
  assert.equal(l.head(),"d")
});


QUnit.test("Returns the correct length of a list", function (assert) {
  var l = new List()
  assert.equal(l.length(), 0)
  l.add("a")
  l.add("b")
  l.add("c")
  assert,equal(l.length(),3)
  l.pop()
  assert,equal(l.length(),2)
  l.pop()
  l.pop()
  assert,equal(l.length(),0)
});


QUnit.test("Pop gets the most recent element off the list", function (assert) {
  var l = new List()
  l.add("a")
  l.add("b")
  l.add("c")

  assert.equal(l.pop(),"c")
  assert.equal(l.head(),"b")
  assert.equal(l.length(), 2)

  assert.equal(l.pop(),"b")
  assert.equal(l.head(),"a")
  assert.equal(l.length(), 1)

  assert.equal(l.pop(),"a")
  assert.equal(l.head(),null)
  assert.equal(l.length(), 0)

  // Any further pop()s return null 
  assert.equal(l.pop(),null)
  assert.equal(l.head(),null)
  assert.equal(l.empty(), true)
});



QUnit.test("Returns the last element in the list", function (assert) {
  var l = new List()
  assert.equal(l.last(), null)
  l.add("a")
  l.add("b")
  l.add("c")
  assert.equal(l.last(),"a")
  assert.equal(l.length(), 3)
});

QUnit.test("Returns true if the lists are equal and false is not", function (assert) {
  var l = new List()
  var l2 = new List()
  assert.equal(l.equals(l2), true)

  l.add("a")
  l.add("b")
  l2.add("a")
  l2.add("b")
  assert.equal(l.equals(l2), true)

  l2.add("c")
  assert.equal(l.equals(l2), false)

  l.pop()
  assert.equal(l.equals(l2), false)
});