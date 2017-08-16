/*checking whether it is prime value or not given by the user*/
function isPrime(k) {
  var flag = 0;
  for (j = 2; j <= k / 2; j++) {
    if (k % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true;
  }
}
//single dimension to store the prime values
var arr = new Array(50);
for (i = 2; i < 1000; i++) {
  if (isPrime(i) == true) {
    arr[i] = i;
    }
}
var size = arr.length;
var arr2=[];
var agram=new Array(1000);
anagram(arr, size);
var x, y;
/*reads the two strings and check for the anagram condition
if it is satisfied then one string is the anagram of the other */
function anagram(arr, size) {
  var flag;
  var x=0;

  for (i = 0; i < size; i++) {
    if (arr[i] > 10) {
      var no1 = arr[i];
      var a = Math.floor(no1 / 10);
      var b = no1 - a * 10;
      for (j = i + 1; j < size; j++) {
        var no2 = arr[j];
        var c = Math.floor(no2 / 10);
        var d = no2 - c * 10;
        if (a == d && b == c) {
        agram[x]=arr[j];
          x++;
          break;

        } else {
          continue;
        }
      }
    }
        if (arr[i] > 100) {
      var no1 = arr[i];
      var a = Math.floor(no1 / 100);
      var b = no1 - a * 100;
      var c = Math.floor(b / 10);
      var d = b - c * 10;
      for (j = i + 1; j < size; j++) {

        var no2 = arr[j];
        var e = Math.floor(no2 / 100);
        var f = no2 - e * 100;
        var g = Math.floor(f / 10);
        var h = f - g * 10;
        arr2.push(e);
        arr2.push(g);
        arr2.push(h);
        arr2.sort();

        var a1 = arr2[0];
        var a2 = arr2[1];
        var a3 = arr2[2];
        arr2 = [];
        if ((a == a1) && (c == a2) && (d == a3)) {
          agram[x]=arr[j];
          x++;
          break;
        } else {
          continue;
        }
      }
    }
  }
}
/*creating a node*/
function Node(data) {
  this.value = data;
  this.next = null;
}
/*creating a stack objects*/
function stack()
{
  this.top =0;
}
/*display elements in the node if it is empty
then display empty node else traverse till the lst and print the values*/
stack.display = function()
{
  currentNode = this.top;
  if (currentNode == null)
  {
    console.log("Node is Empty");
  }
  while (currentNode)
  {
    console.log(currentNode.value);

    currentNode = currentNode.next;
  }
}
//pushing of the element into stack array
stack.pushing=function(data)
{
  var node=new Node(data);
  if (this.top== null)
    {
    this.top=node;
    }
    else
    {
      node.next=this.top;
      this.top=node;
    }
}
//making the last inserted element to be deleting it from the array
stack.popping=function()
{
currentNode=this.top;
if(this.top==null)
{
  console.log("Stack is empty");
}
else {
  console.log(currentNode.value);
  currentNode=this.top.next;
  delete(this.top);
  this.top=currentNode;
}
}
var inserted_count=0;

for(i=0; i<50; i++)
{
if(agram[i]!=null)
{
  inserted_count++;
stack.pushing(agram[i]);
}
}
console.log("Anagrams Inserted in the Stack list");
stack.display();
console.log("----------------------------------------------------------");
console.log("Anagrams that are printed in Reverse order by pop in Stack");
for(i=0; i<inserted_count; i++)
{
  stack.popping();
}
