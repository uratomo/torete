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
  function buildForm(card){
    var html =`
    <div id="modal-overlay">
    <div id="modal-content">
      <form class="cardNew">
        <input type="hidden" name="list_id" value="${card.list_id}">
        <div class='container'>
          <h2>カードの追加</h2>
        </div>
        <div class="cardnewForm_memo">
        <label for="memo">memo</label>
          <input type="text" name="memo", autofocus=true, class="form-control", placeholder="詳細" >
          <input type="submit" , class="submitBtn">作成する</<submit>
        </div>
      </form>
      <p><a id="modal-close" class="button-link">閉じる</a></p>
    </div>
    </div>
  </div>
    `
    return html
  }

  


  $(".add_card_link").on("click", function() {
    var list_id = $(this).parent().data();
    $.ajax({
      type: "GET",
      url: ` /list/${list_id}/card/new`,
      data: list_id,
      dataType: "JSON"
    })

    .done(function(card){
      var html =buildForm(card)
      $("#modal").append(html).hide().fadeIn()

    })
    .fail(function(){

    })
  });
$(document).on(submit,".submitBtn",function(){
  
  $.ajax({
    type: "POST",
    url:`/list/${list_id}/card`,
    data:"",
    dataType:"JSON"
  })

  .done(function(){

  })
})

});
