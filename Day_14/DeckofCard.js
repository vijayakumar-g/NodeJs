var deck_of_cards = new Array(52);
var card_suits = ["club", "diamond", "heart", "spades"];
var card_rank = ["2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king", "ace"];
var index = 0;
var temp;
var x = 0;
var array_suits = new Array(52);
var array_rank = new Array(52);
var twoD_suits = new Array(52);
var twoD_rank = new Array(52);

for (i = 0; i < 52; i++) {
  deck_of_cards[i] = i;
  twoD_suits[i] = new Array(52);
  twoD_rank[i] = new Array(52);
}
for (i = 0; i < 52; i++) {
  index = Math.floor((Math.random() * 52));
  temp = deck_of_cards[i];
  deck_of_cards[i] = deck_of_cards[index];
  deck_of_cards[index] = temp;
}
for (i = 0; i < 52; i++) {
  array_suits[i] = card_suits[Math.floor(deck_of_cards[i] / 13)];
  array_rank[i] = card_rank[deck_of_cards[i] % 13];

}
for (i = 0; i < 4; i++) {
  console.log("Player " + (i + 1));
  console.log("----------------------------");
  for (j = 0; j < 9; j++) {
    twoD_suits[i][j] = array_suits[x];
    twoD_rank[i][j] = array_rank[x];
    console.log("card:" + (j + 1) + " suits: " + twoD_suits[i][j] + " rank: " + twoD_rank[i][j]);
    x++;
  }
  console.log("----------------------------");
}