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

  // modal_card_new
  function buildForm(){
    var html =`
    <div class="card">
    <div class="card_title">
      <div class="card_title_header">
        <input type="text" placeholder="テキストを入力してください" class="write_text">
        </div>
    `
    return html
  }

  


  $(".add_card_link").on("click", function() {
    var list_id = $(this).parent().data("list-id");
    $.ajax({
      type: "GET",
      url: ` /list/${list_id}/card/new`,
      data: list_id,
      dataType: "JSON",
      context:this
    })

    .done(function(card){
      var html =buildForm()
      $(this).parent().parent().append(html)
      
    })
    .fail(function(){

    })
  });

  // create
$(document).on("change",".write_text",function(e){
  e.preventDefault
  // var formData= new FormData($(this).val());
  list_id = $(this).children("#list").val();
  console.log($(this).

  $.ajax({
    type: "POST",
    url:`/list/${list_id}/card`,
    data:{
      card:$(this).val()
    },
    dataType:"JSON"
  })
  .done(function(){
    console.log(2222)


  })
})

});
