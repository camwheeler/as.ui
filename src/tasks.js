$(document).ready(function(){
   
   loaddata();

   $('.taskStatus').on('click', 'button', function(){
      var sdf = $(this).closest('button');
      if (sdf[0].innerText == 'Start'){
         sdf[0].innerText = 'Finish';
      }
      else if (sdf[0].innerText == 'Finish'){
         sdf[0].innerText = 'Done';
         sdf[0].disabled = true;
      }
   });
});

function loaddata(){
var kid = 'Cassidy';
$.getJSON('tasks.json',
   function(data){
      var tasks = $.grep(data.kids, function(e){
         return e.Name==kid
      })[0].Tasks;
      
      var row = '';
      for (var i in tasks){
         var task = tasks[i];
         row+='<tr><td>'+task.Name+'</td>';
         row+='<td>'+task.Description+'</td>';
         row+='<td><button>Start</button></td></tr>';
      }
      $(row).appendTo('.taskStatus');
   });
};