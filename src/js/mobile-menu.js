(function () {
  const burgerButton = document.querySelector('.burger-menu-button');
  const mobileModal = document.getElementById('mobile-modal');
  const navLinks = document.querySelectorAll('.mobile-modal-nav-link');

  function toggleModal() {
    const isOpen = mobileModal.classList.contains('is-open');

    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }

  function openModal() {
    mobileModal.classList.add('is-open');
    burgerButton.classList.add('is-open');
  }

  function closeModal() {
    mobileModal.classList.remove('is-open');
    burgerButton.classList.remove('is-open');
  }

  burgerButton.addEventListener('click', toggleModal);

  navLinks.forEach(link => {
    link.addEventListener('click', closeModal);
  });
})();
