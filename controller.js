
function checkEl(){ //check jumlah foto
  if ($(".foto_list > .item").length == 1){
    $('.foto_list').addClass('solo-foto');
  }
  else if ($(".foto_list > .item").length == 2){
    $('.foto_list').addClass('duo-foto');
  }
  else if ($(".foto_list > .item").length == 3){
    $('.foto_list').addClass('trio-foto');
  }
  else if ($(".foto_list > .item").length == 4){
    $('.foto_list').addClass('kwartet-foto');
  }

}
window.onload = checkEl();

$(function () {
	//IMAGE LIQUID
    $(".lqd").imgLiquid();

    //filter slide
    $('.search-result .arrow').on('click',function(){
      $(this).toggleClass('chg');
      $('.filter').slideToggle();
    });

    //modal image
    $('.pop-up a').on('click',function(e){
      e.preventDefault();
      $('.modal-wrap').fadeIn();
    });
    $('.close-btn,.modal-wrap').on('click',function(e){
      e.preventDefault();
      $('.modal-wrap').fadeOut();
    });
    $('.modal-img').click(function(e){
        e.stopPropagation();
    });

});
