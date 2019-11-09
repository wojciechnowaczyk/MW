$(".InstructionSliders > div:gt(0)").hide();

setInterval(function() {
  $('.InstructionSliders > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.InstructionSliders');
}, 7000);
