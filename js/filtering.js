$(document).ready(function(){
  function filtering(){
    data = '';
    var buttons = $('.FilterPositionPlace');
    buttons.click(function(){
      $(this).each(function(){
        $(this).toggleClass('FilterPositionPlace FilterPositionPlaceClicked');
      })
    })
    var buttonsExp = $('.FilterPositionExp');
    buttonsExp.click(function(){
      $(this).each(function(){
        $(this).toggleClass('FilterPositionExp FilterPositionExpClicked');
      })
    })
    var buttonsLang = $('.FilterPositionLang');
    buttonsLang.click(function(){
      $(this).each(function(){
        $(this).toggleClass('FilterPositionLang FilterPositionLangClicked');
      })
    })
    var filtered = $('#Filter');
    filtered.click(function(){
      var getPlace = $('.FilterPositionPlaceClicked').attr('place');
      var getExp = $('.FilterPositionExpClicked').attr('exp');
      var getLang = $('.FilterPositionLangClicked').attr('lang');
      var getBoxes = $('.JobBox');
      getBoxes.hide();
      getBoxes.each(function(){
        if($(this).attr('place')==getPlace || getPlace== undefined){
          if($(this).attr('exp')==getExp || getExp== undefined){
            if($(this).attr('lang')==getLang || getLang== undefined){
              $(this).show();
            }
          }
        }
      })

      })
    }
  filtering();
})
