$('#add').click(submithandler);
function submithandler()
{
  var testform=document.getElementById('form1');

  $.ajax({
    url:'/saving',
    type:'POST',
    data: {
      firstName:form1.fname.value
    },
    sucess: function(data)
    {
      alert("sucess");
    }
  });
}
// function readdata()
// {
//   $.ajax({
//     url:'/get',
//     type:'GET',
//     datatype:'json',
//     sucess: function(data)
//     {
//       alert("sucess");
//     }
//   });
// }
