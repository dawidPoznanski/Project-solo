function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible);
}
document.querySelector('.sidebar-toggler').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  
  console.log(toggleMenu());
});



// const toggler = document.querySelector('.sidebar-toggler');

// toggler.addEventListener('click', () => {
  
//   const sidebar = document.querySelector('.sidebar');
//   const penis = document.querySelector('.toggler');
//   penis.classList.toggle('toggler-active');
//   sidebar.classList.toggle('huj');
// });