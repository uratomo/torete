$(document).on("turbolinks:load", function() {

function buildForm(card){
  var html =`
  <div class="card" id="new_card">
  <div class="card_title">
    <div class="card_title_header" data-list-id=${card.list_id}>
      <textarea rows="3" placeholder="テキストを入力してください" class="write_text" autofocus ></textarea>
      </div>
  `
  return html
};

function buildCard(card){
  var html = `
            <div class="card">
              <div class="card_title">
                <div class="card_title_header">
                  <p>${card.title}</p>
                </div>
              </div>
            </div>
  `
  return html
};




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
    var html =buildForm(card)
    $(`#wrap${card.list_id}`).append(html).animate(
      { scrollTop: $(`#wrap${card.list_id}`)[0].scrollHeight },
      "fast"
    );
    
  })
  .fail(function(){

  })
});

// create
$(document).on("change",".write_text",function(e){
e.preventDefault
// var formData= new FormData($(this).val());
list_id = $(this).parent().data("list-id");

$.ajax({
  type: "POST",
  url:`/list/${list_id}/card`,
  data:{
    card:$(this).val()
  },
  dataType:"JSON"
})
.done(function(card){
  $("#new_card").remove()
  var html = buildCard(card)
  $(`#wrap${card.list_id}`).append(html)


})
.fail(function(){
  alert("保存に失敗しました。")
})
})

});


