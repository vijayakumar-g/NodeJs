var deck_of_cards=new Array(52);
var card_suits=["club","diamond","heart","spades"];
var card_rank=["2","3","4","5","6","7","8","9","jack","queen","king","ace"];
var index=0;
var temp;
var array_suits=new Array(52);
var array_rank=new Array(52);

for(i=0; i<52; i++)
{
  deck_of_cards[i]=i;
  array_suits[i]=new Array(52);
  array_rank[i]=new Array(52);
}
for(i=0; i<52; i++)
{
  index=Math.floor((Math.random()*52));
  temp=deck_of_cards[i];
  deck_of_cards[i]=deck_of_cards[index];
  deck_of_cards[index]=temp;
}
for(i=0; i<4; i++)
{
  for(j=0; j<9; j++)
  {
    array_suits[i][j]=card_suits[Math.floor(deck_of_cards[i]/13)];
    array_rank[i][j]=card_rank[deck_of_cards[i]%13];
    console.log("suits: "+array_suits[i][j]+" rank: "+array_rank[i][j]);
  }
}
for(i=0; i<4; i++)
{
  console.log("Player "+(i+1));
  for(j=0; j<9; j++)
  {
    console.log("suits: "+array_suits[i][j]+" rank: "+array_rank[i][j]);
  }
}
