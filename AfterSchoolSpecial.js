$(document).ready(function(){
   $('.TaskStatus').on('click', 'button', function(){
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