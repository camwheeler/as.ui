var asData;

$(document).ready(function(){
   
   loaddata();

   $('.taskStatus').on('click', 'button', function(){
      var sdf = $(this).closest('button');
      if (sdf[0].innerText == 'Start'){
         sdf[0].innerText = 'Finish';
         $(sdf).removeClass('buttonStart');
         $(sdf).addClass('buttonFinish');
      }
      else if (sdf[0].innerText == 'Finish'){
         sdf[0].innerText = 'Done';
         sdf[0].disabled = true;
         $(sdf).removeClass('buttonFinish');
         $(sdf).addClass('buttonDone');
      }
   });
});

function loaddata(){
var kid = 'Cassidy';
$.getJSON('tasks.json',
   function(data){
      asData = data;
      var tasks = $.grep(data.kids, function(e){
         return e.Name==kid
      })[0].Tasks;
      
      var row = '';
      for (var i in tasks){
         var task = tasks[i];
         row+='<tr><td>'+task.Name+'</td>';
         row+='<td>'+task.Description+'</td>';
         row+='<td><button class="buttonStart">Start</button></td></tr>';
      }
      $(row).appendTo('.taskStatus');
   });
};