(function() {
  function MobileMenu() {
    this.menuIcon = $(".nav-toggle");
    this.mobileContent = $(".nav-list");
    this.body = $("body");
    this.events();
  }

  MobileMenu.prototype.events = function(){
    this.menuIcon.click(this.toggleMenu.bind(this));
  };

  MobileMenu.prototype.toggleMenu = function(){
    this.mobileContent.toggleClass("nav-list-visible");
    this.menuIcon.toggleClass("close-x");
    this.body.toggleClass("noscroll");

  };
  
  return new MobileMenu();
})()

