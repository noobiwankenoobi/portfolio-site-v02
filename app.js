
function onSiteLoad() {
  $('.modal-div').hide();
}

function showProjectModal() {
  $('.modal-div').show();
}

function closeModal() {
  $('.modal-div').hide();
}

// Project Modals
function showPathfinderModal() {

}

function showWooferModal() {

}

function showFacedetectModal() {

}

function showCurioModal() {

}

function showTictactoeModal() {

}





// Click Handlers
function addHandlers() {
  // Modal
  $('.project-card').on('click', showProjectModal);
  $('#exit-modal-button').on('click', closeModal);
  // Cards
  $('#pathfinder-card').on('click', showPathfinderModal);
  $('#woofer-card').on('click', showWooferModal);
  $('#facedetect-card').on('click', showFacedetectModal);
  $('#curio-card').on('click', showCurioModal);
  $('#tictactoe-card').on('click', showTictactoeModal);
}

// On Site Load
$(() => {
  addHandlers();
  onSiteLoad();
})
