function closeMenu() {
    var x = document.getElementById("ResponsiveMenu");
    x.className = "ResponsiveMenu";
}

function menuBurger() {
  var x= document.getElementById("ResponsiveMenu");
  var y = document.getElementById("ResponsiveButton");
  if(x.className === "ResponsiveMenu"){
      x.className += "Show";
  }else{
    x.className = "ResponsiveMenu";
  }
}
