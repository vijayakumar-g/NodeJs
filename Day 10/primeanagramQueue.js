
function isPrime(k) {
  var flag = 0;
  for (j = 2; j <= k / 2; j++) { //checking for the prime conditio till the half of the element
    if (k % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true; //if prime then return true
  }
}
var arr = new Array(50);  //single dimension to store the prime values
for (i = 2; i < 1000; i++) {
  if (isPrime(i) == true) { //checking for the prime condition
    arr[i] = i;
    }
}
var size = arr.length;
var arr2=[];
var agram=new Array(1000);
anagram(arr, size);
var x, y;
function anagram(arr, size) {
  var flag;
  var x=0;

  for (i = 0; i < size; i++) {
    if (arr[i] > 10) { //for two digit number the anagram is done
      var no1 = arr[i];
      var a = Math.floor(no1 / 10); //getting the whole digit as individual digit
      var b = no1 - a * 10;
      for (j = i + 1; j < size; j++) { //comparing of the next prime number in the array
        var no2 = arr[j];
        var c = Math.floor(no2 / 10); //getting the whole digit as individual digit
        var d = no2 - c * 10;
        if (a == d && b == c) { //checking the anagram condition
        agram[x]=arr[j]; //storing the anagram value in the array
          x++;
          break;

        } else {
          continue;
        }
      }
    }
        if (arr[i] > 100) { //for three digit number the anagram is done
      var no1 = arr[i];
      var a = Math.floor(no1 / 100); //getting the whole digit as individual digit
      var b = no1 - a * 100;
      var c = Math.floor(b / 10);
      var d = b - c * 10;
      for (j = i + 1; j < size; j++) { //comparing of the next prime number in the array

        var no2 = arr[j];
        var e = Math.floor(no2 / 100); //getting the whole digit as individual digit
        var f = no2 - e * 100;
        var g = Math.floor(f / 10);
        var h = f - g * 10;
        arr2.push(e); //pushing the each individual element into an array
        arr2.push(g);
        arr2.push(h);
        arr2.sort(); // sorting the anagram values stored in the array

        var a1 = arr2[0];
        var a2 = arr2[1];
        var a3 = arr2[2];
        arr2 = [];
        if ((a == a1) && (c == a2) && (d == a3)) { //checking the anagram condition
          agram[x]=arr[j]; // storing all the anagram value in the  1d array
          x++;
          break;
        } else {
          continue;
        }
      }
    }
  }
}
//here rear gets incremented and front will remain in first position

function Node(data) {
  this.value = data;
  this.next = null;
}

function queue()
{
  this.rear =0;
  this.front=0;
}
queue.display = function() //display the elements in the node
{
  currentNode = this.front;
  if (currentNode == null) //checking for empty node
  {
    console.log("Node is Empty");
  }
  while (currentNode!=this.rear) //checking for node to be not null
  {
    console.log(currentNode.value); //traversing till the last

    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}
queue.enqueue=function(data)
{
  var node=new Node(data);
  if(this.rear==null)
  {
    this.rear=node;
    this.front=this.rear;
  }
  else {
      this.rear.next=node;
      node.value=data;
      this.rear=node;
      }
}
queue.dequeue=function(i)
{
  if(this.rear==null)
  {
    console.log("Queue Node is empty");
  }
  else {
  currentNode=this.front;
  this.front=currentNode.next;
  console.log(currentNode.value+" is leaving queue "+i);
  delete(currentNode);
    }
}
var inserted_count=0;

for(i=0; i<50; i++)
{
if(agram[i]!=null)
{
  inserted_count++;
queue.enqueue(agram[i]);
}
}
console.log("Anagrams Inserted in the Queue list");
queue.display();
console.log("----------------------------------------------------------");
console.log("Anagrams that are printed in Reverse order by pop in Queue");
for(i=0; i<inserted_count; i++)
{
  queue.dequeue(i+1);
}

// queue.enqueue();
// queue.enqueue();
// queue.dequeue();
// queue.display();
