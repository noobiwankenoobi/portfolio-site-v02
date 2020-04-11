
function onSiteLoad() {
  $('.modal-div').hide();
}

function closeModal() {
  $('.modal-div').hide();
}

// Project Modals
function showPathfinderModal() {
  $('#pathfinder-modal').show();
}

function showWooferModal() {
  $('#woofer-modal').show();
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
  $('#exit-modal-button').on('click', closeModal);
  $('.modal-div').on('click', closeModal);

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
