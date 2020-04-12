
function onSiteLoad() {
  $('.modal-div').hide();
}

function closeModal() {
  $('.modal-div').hide();
}

function openMobileNav() {
  event.preventDefault()
  document.getElementById('navbar-mobile-content').style.width = '50vw';
}

function closeMobileNav() {
  event.preventDefault()
  document.getElementById('navbar-mobile-content').style.width = '0';
}
////////////////////
// Project Modals //
////////////////////
function showPathfinderModal() {
  $('#pathfinder-modal').show();
}

function showWooferModal() {
  $('#woofer-modal').show();
}

function showFacedetectModal() {
  $('#facedetect-modal').show();
}

function showCurioModal() {
  $('#curio-modal').show();
}

function showTictactoeModal() {
  $('#tictactoe-modal').show();

}

// SCROLLING //

// HOME
$(".home-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".landing-section").offset().top},
      'slow');
  closeMobileNav()
});

// ABOUT ME
$(".about-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".bio-section").offset().top},
      'slow');
      closeMobileNav();

});

// SKILLS
$(".skills-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".skills-section").offset().top},
      'slow');
  closeMobileNav();

});

// PROJECTS
$(".projects-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".projects-section").offset().top},
      'slow');
      closeMobileNav();

});

// FACTS
$(".facts-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".random-section").offset().top},
      'slow');
      closeMobileNav();

});

// ART
$(".art-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".artwork-section").offset().top},
      'slow');
      closeMobileNav();

});

// CONTACT
$(".contact-link").click(function() {
  event.preventDefault();
  $('html,body').animate({
      scrollTop: $(".contact-section").offset().top},
      'slow');
      closeMobileNav();

});




// Click Handlers
function addHandlers() {
  // Modal
  $('#exit-modal-button').on('click', closeModal);
  $('.modal-div').on('click', closeModal);

  // Cards
  $('#pathfinder-card').on('click', showPathfinderModal);
  $('#woofer-card').on('click', showWooferModal);
  $('#facedetect-card').on('click', showFacedetectModal);
  $('#curio-card').on('click', showCurioModal);
  $('#tictactoe-card').on('click', showTictactoeModal);

  // Nav
  $('.nav-mobile-button').on('click', openMobileNav);
  $('#close-menu-button').on('click', closeMobileNav);

}

// On Site Load
$(() => {
  addHandlers();
  onSiteLoad();
})
