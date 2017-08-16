//reading the money for which the minimum notes to be given
var money = +process.argv[2];
//array storing the rupees 
var notes=[1000,500,100,50,10,5,2,1];
var notecount=[];
//calculating the notes for each notes by string it in array
for(i=0; i<7; i++)
{
  if(money>=notes[i])
  {
    notecount[i]=Math.floor(money/notes[i]);
    money=money-(notecount[i]*notes[i]);

  }
}
//displaying the array with minimum notes 
  for(i=0; i<7; i++)
  {
    if(notecount[i]!=null)
    {
      console.log("Rs:"+notes[i]+"->"+notecount[i]);

    }
}
