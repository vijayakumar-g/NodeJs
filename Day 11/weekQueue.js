var sprintf=require("sprintf");
var fs=require("fs");
//week array has the day with the corresponding index value
 var week={
  0:"sun",
  1:"mon",
  2:"tue",
  3:"wed",
  4:"thu",
  5:"fri",
  6:"sat"
}
// month array has the no of days for each month that has
var month={
  1:31,
  2:28,
  3:30,
  4:31,
  5:30,
  6:31,
  7:31,
  8:31,
  9:30,
  10:31,
  11:30,
  12:31
}
//month array with respective month details
var monthExp={
  1:"jan",
  2:"feb",
  3:"mar",
  4:"apr",
  5:"may",
  6:"jun",
  7:"jul",
  8:"aug",
  9:"sept",
  10:"oct",
  11:"nov",
  12:"dec"
}

var m=+process.argv[2]; //reading the month from the user
var y=+process.argv[3]; //reading the year from the user
var y0 = Math.floor(y+4800-((14-m)/12));
var x = Math.floor(y0+y0/4-y0/100 + y0/400);
var m0 = Math.floor(m + 12 * ((14 - m) / 12)-3);
//calculating the day of which the month is going to be starts
var day=Math.floor((2+((153 *(m0)+ 2) / 5)+ (365 * x)- 32045));
day=day%7;
//for the array no of week of the month week is taken in an account
var dd=month[m];
var w=dd%7;
var weeks=w+2;
//creating a array with the 2d to display the calendar
var c=0;
var start=1;
console.log("javascript calender:"+m+" "+y)
console.log(""+monthExp[m]+" "+y);
console.log("su    m    t     w     th    fr    sa ");
function Node(d) {
  this.obj= d;
  this.next = null;
}
function queue()
{
  this.rear =0;
  this.front=0;
}
function week_withdays(d,da)
{
  this.day=d;
  this.date=da;
}
queue.prototype.display = function() //display the elements in the node
{
  currentNode = this.rear;
  if (currentNode == null) //checking for empty node
  {
    console.log("Node is Empty");
   }
  if(currentNode.next!=null&& currentNode==this.front) //checking for node to be not null
   {
    console.log(currentNode.obj.day);
     //traversing till the last
    currentNode = currentNode.next;

  }
}
var arr=[];
var x=0;
queue.prototype.enqueue=function(d)
{
  var node=new Node(d);
  if(this.rear==null)
  {
    this.rear=node;
    this.front=this.rear;
  }
  else {
      this.rear.next=node;
      node.obj=d;
      this.rear=node;
      }
      //console.log(this.rear.obj.date);

}
queue.prototype.dequeue=function()
{
  if(this.rear==null)
  {
    console.log("Queue Node is empty");
  }
  else {
  currentNode=this.front;
  if(currentNode!=null)
  {
    this.front=currentNode.next;
    console.log(currentNode.obj.date);
    delete(currentNode);

  }
    }
 }
var Week=new queue();
for(var i=0; i<=weeks; i++)
{

  for(var j=0; j<7; j++)
  {
    if(j<day) //to print the space value here my space value= 0 is taken to display in proper manner
    {
      var weekday=new week_withdays(week[j],"0");

    }
    else {
      if((start<=month[m]+1))
      {
        var weekday=new week_withdays(week[j],start);
        start++;

      }
    }
      Week.enqueue(weekday);
    }
    console.log("\n");
  day=0;
}
Week.display();
