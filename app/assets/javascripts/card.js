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

  // modal-window表示  card new
  $(".add_card_link").on("click", function() {
    $("#modal-overlay").fadeIn();
    $(this).prop("disabled", false);
  });
  // modal-window 閉じるボタン
  $("#modal-close").on("click", function() {
    $("#modal-overlay").fadeOut();
  });
});
