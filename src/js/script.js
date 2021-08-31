function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('show');
}
document.querySelector('.sidebar-toggler').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
