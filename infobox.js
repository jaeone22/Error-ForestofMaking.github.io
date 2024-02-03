document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var openModalBtn = document.getElementById('openModalBtn2');
    var openModalBtn = document.getElementById('openModalBtn3');
    var customModal = document.getElementById('customModal');
    var closeModalBtn = document.getElementById('close_bt');
  
    openModalBtn.addEventListener('click', function() {
        customModal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function() {
        customModal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
        if (event.target == customModal) {
            customModal.style.display = 'none';
        }
    });
});