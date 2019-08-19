$( document ).ready(function() {
  $('.talk-abstract').hide();
  $('.talk-title-link').on('click', function () {
      var tr = $(this).parents('tr').next('tr');
      if (tr.is(":hidden")) {
        tr.show();
      } else {
        tr.hide();
      }
  });
});
