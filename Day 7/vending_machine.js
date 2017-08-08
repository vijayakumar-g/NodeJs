var money = +process.argv[2];
var notes=[1000,500,100,50,10,5,2,1];
var notecount=[];
for(i=0; i<7; i++)
{
  if(money>=notes[i])
  {
    notecount[i]=Math.floor(money/notes[i]);
    money=money-(notecount[i]*notes[i]);

  }
}
  for(i=0; i<7; i++)
  {
    if(notecount[i]!=null)
    {
      console.log("Rs:"+notes[i]+"->"+notecount[i]);

    }
}
