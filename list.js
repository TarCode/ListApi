
// An object to hold the item we will be
// storing in our list
var ListItem = function(data, tail) {
  this.tail = tail
  this.data = data
}

// List implementation
var List = function() {
  this.item = null

  // Add a data item to the front of the list
  this.add = function(elem) {
    this.item = new ListItem(elem, this.item)
  }

  // Returns true if the list is empty
  this.empty = function() {
    return this.item === null
  }

  // Returns the data at the head of the list. If
  // the list is empty, return null. This leaves
  // the list unmodified
  this.head = function() {
      if(this.item === null){
          return null
      }
      else {
          return this.item.data
      }
  }

  // Remove item off the head of the list and return
  // its value. The new head of the list must be the
  // next element in the list if it exists. If the
  // list is empty, we return null
  this.pop = function() {
      if(this.item === null){
        return null;
      }
      else{
        var temp = this.item.data;
        this.item = this.item.tail;
        return temp;
      }
  }

  // Return the number of elements in the list.
  this.length = function() {
    var temp = this.item;
    var count = 0;

    if(this.item === null){
      return 0;
    }
    else{
      while(temp){
        count++;
        temp = temp.tail;
      }
      return count;
    }
  }

  // Return the last data item in the list if it exists. If
  // not, return null
  this.last = function() {
    if(this.empty()){
      return null
    }
    else{
      var last = this.item.tail;

      while(last.tail){
        last = last.tail;
      }
      return last.data;
    }
  }

  // An equality functions,checks if the list length and
  // ordering is the same
  this.equals = function(that) {
    if(this.length() !== that.length()) {
      return false;
    }
    else if(this.empty() && that.empty()) {
      return true;
    }
    var temp = this.item;
    var temp2 = that.item;
    var eq = true;
    if(!this.empty() && !that.empty()) {
      while(temp.tail && eq === true){
        if(temp.data === temp2.data) {
          eq = true;
          temp = temp.tail;
          temp2 = temp2.tail;
        }
        else{
          eq = false;
        }
      }
      return eq;
    }
    }

    // A join method that joins two lists together
    this.join = function(that) {
      var listCopy= that.item;

      while(listCopy){
        this.add(listCopy.data);
          listCopy = listCopy.tail;
      }
        return this.item
    }

    // A reverse method that reverses the list order
    this.reverse = function() {
      var newList = new List();

      while(!this.empty()){
          var element = this.pop()
          newList.add(element)

      }
        this.item = newList.item
        return this.item
    }
}

