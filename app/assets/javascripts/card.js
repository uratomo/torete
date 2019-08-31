$(document).on("turbolinks:load", function() {
  // Read more...
  $(".card_memo_title").on("click", function() {
    $(this)
      .siblings(".card_memo-hidden")
      .show();
    $(this).css("display", "none");
  });

  $(".card_memo-hidden").on("click", function() {
    $(this)
      .siblings(".card_memo_title")
      .show();
    $(this).css("display", "none");
  });

  // card_edit button
  $(".card_title_header").on("hover", function() {
    $(this)
      .find(".card_title_header-hidden")
      .show();
  });

  // modal-window 閉じるボタン
  $(document).on("click", "#modal-close",function() {
    $("#modal-overlay").fadeOut('fast').queue(function(){
      this.remove();
    })
  });
});
