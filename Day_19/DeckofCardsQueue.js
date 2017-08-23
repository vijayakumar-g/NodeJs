var deck_of_cards = new Array(52);
/*array with card suits are initialized*/
var card_suits = ["club", "diamond", "heart", "spades"];
/*array with card rank are initilized*/
var card_rank =['A','K','Q','J',10,9,8,7,6,5,4,3,2];
var index = 0;
var temp;
var x = 0;
var array_suits = new Array(52);
var array_rank = new Array(52);

for (i = 0; i < 52; i++) {
  deck_of_cards[i] = i;
}
/*random method is used to shuffle the cards*/
for (i = 0; i < 52; i++) {
  index = Math.floor((Math.random() * 52));
  temp = deck_of_cards[i];
  deck_of_cards[i] = deck_of_cards[index];
  deck_of_cards[index] = temp;
}
/*the shuffle card are stored in a shuffle manner for each player*/
for (i = 0; i < 52; i++)
{
  array_suits[i] = card_suits[Math.floor(deck_of_cards[i] / 13)];
  array_rank[i] = card_rank[deck_of_cards[i] % 13];

}
/* the four players who got the different cards of max 9*/
for (i = 0; i < 52; i++)
{
   if(array_rank[i]==null)
     {
       array_rank[i]=(Math.floor(Math.random()*8)+1);
     }
}

/*creating a node*/
function Node(d)
{
  this.obj = d;
  this.next = null;
}

function queue()
{
  this.rear = null;
  this.front = null;
}
function deck(suit,rank)
{
  this.suits=suit;
  this.rank=rank;
}
/*enqueue is function in queue to add the element to the queue
and the element added should like a queue format so whenever
new element is inserted it should be wait in the queue*/
queue.prototype.enqueue = function(data) {
  var node = new Node(data);
    if (this.rear == null)
   {
    this.rear = node;
    this.front = node;
    }
   else
   {
    this.rear.next = node;
    this.rear = node;
  }
  console.log(this.rear);
}

/*display elements in the node if it is empty
then display empty node else traverse till the lst and print the values*/
queue.prototype.display = function() {
  currentNode = this.front;

  if (currentNode == null)
  {
    console.log("Node is Empty");
  }
  while (currentNode != this.rear)
  {
    console.log(currentNode.front.obj.suits+" "+currentNode);
    currentNode = currentNode.next;
  }

    console.log(currentNode.obj.suits+" "+currentNode);
}

var players=new Array(4);
var no_of_players=new queue();
var player1=new queue();
for(i=0; i<4; i++)
 {
   players[i]=new queue();
 }
 x=0;
 //  for(i=0; i<4; i++)
 // {
    for(j=0; j<9; j++)
    {
        var cards=new deck(array_suits[x],array_rank[x]);
        x++;
        player1.enqueue(cards);
    }
  // }
  console.log('\n');
//console.log(no_of_players);
no_of_players.enqueue(player1);
//console.log(no_of_players);
no_of_players.display();
// queue.prototype.sorting=function()
// {
//   currentNode=this.front;
//   while(currentNode.next!=null)
//   {
//     if(compare(currentNode.obj,currentNode.next.obj)==2)
//     {
//       var temp=new Node(null);
//       temp.obj=currentNode.obj;
//       currentNode.obj=currentNode.next.obj;
//       currentNode.next.obj.rank=temp.obj;
//     }
//     currentNode=currentNode.next;
//   }
// }
// function compare(x,y)
// {
//   var rank1=x.rank;
//   var rank2=y.rank;
//
//   r1=card_rank.indexOf(rank1);
//   r2=card_rank.indexOf(rank2);
//   if(r1<=r2) return 2;
//   else return 1;
// }
// players[1].sorting();
// console.log("\n");
// players[1].display();
