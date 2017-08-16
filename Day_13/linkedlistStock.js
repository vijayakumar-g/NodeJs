
/*creating a node for the linklist function*/
function Node(data) {
  this.value = data;
  this.next = null;
}
/*objects for the orderted list */
function linkedlist() {
  this.head = null;
}

function company_list(data)
  {
    this.share_name=data;
  }

/*display the node elements in the ordered list */
linkedlist.prototype.display = function()
 {
   console.log("\n List of Company Shares :");
  currentNode = this.head;
  while (currentNode.next)
  {
    console.log(currentNode.value.share_name);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value)
{
  var node = new Node(value);
  currentNode = this.head;
  if (currentNode == null)
  {
    this.head = node;
    return node;
  }
  while (currentNode.next)
  {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  // document.write("Added");
  return node;
}



/*check for the first element of the node to be deleted else
traversing till the value to be found and then deleting it*/
linkedlist.prototype.remove = function(value) {
  var removeNode = null;
  var beforeNodeDelete = null;
  currentNode = this.head;
  if (currentNode.value == value) //
  {
    this.head = currentNode.next; //changing the head to the next
    removeNode = currentNode; //removing the current node
    currentnode = null; // current node is assigned to be null
    console.log("remove the company share:" + removeNode.value.share_name+ "from list");
  } else {
    while (currentNode.value != value)
    {
      beforeNodeDelete = currentNode;
      currentNode = currentNode.next;
    }
    beforeNodeDelete.next = currentNode.next;
    removeNode = currentNode;
    currentNode = null;
    console.log("remove the company share:" + removeNode.value.share_name+ "from list");
  }
}

/*check for the element that is being search
and find the element if it is found then delete the element
else add the element to the list*/
linkedlist.prototype.search = function(value) {

  currentNode = this.head;
  while (currentNode != null)
  {
    if (currentNode.value == value)
    {
      console.log("Element:" + value + " found");
      console.log("Removing:")
      orderedList.remove(value);
      break;
    }
    currentNode = currentNode.next;
  }
}
var list_of_company_shares=new linkedlist();
var share1=new company_list("Hindustan Ltd");
var share2=new company_list("Reliance Pvt ");
list_of_company_shares.add(share1);
list_of_company_shares.add(share2);
var share3=process.argv.slice(2);
list_of_company_shares.add(share3);
list_of_company_shares.display();
list_of_company_shares.remove(share2);
list_of_company_shares.display();
