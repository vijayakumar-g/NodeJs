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

function queue()
{
  this.rear =0;
  this.front=0;
}
/*display elements in the node if it is empty
then display empty node else traverse till the lst and print the values*/
queue.display = function()
{
  currentNode = this.front;
  if (currentNode == null)
  {
    console.log("Node is Empty");
  }
  while (currentNode!=this.rear)
  {
    console.log(currentNode.value);

    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}
/*enqueue is function in queue to add the element to the queue
and the element added should like a queue format so whenever
new element is inserted it should be wait in the queue*/
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
/*dequeue function is used to remove the element the in the queue
the first person who enters the queue will leave first
is done in this dequeue*/
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
