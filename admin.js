const USERNAME = "admin";
const PASSWORD = "puja2025";

document.getElementById('login-form').onsubmit = function(e) {
  e.preventDefault();
  const u = e.target.username.value;
  const p = e.target.password.value;
  if (u === USERNAME && p === PASSWORD) {
    document.getElementById('login-section').hidden = true;
    document.getElementById('dashboard-section').hidden = false;
    showTab('home');
    loadAllContent();
  } else {
    document.getElementById('login-error').textContent = "ভুল username/password!";
  }
};

function logout() {
  document.getElementById('dashboard-section').hidden = true;
  document.getElementById('login-section').hidden = false;
}

// Tab switching
document.querySelectorAll('.admin-tabs button').forEach(btn => {
  btn.onclick = () => showTab(btn.dataset.tab);
});
function showTab(tab) {
  document.querySelectorAll('#tab-content [data-pane]').forEach(pane => {
    pane.hidden = pane.getAttribute('data-pane') !== tab;
  });
}

// Load content from localStorage
function loadAllContent() {
  document.getElementById('home-content').value = localStorage.getItem('home') || '';
  document.getElementById('about-content').value = localStorage.getItem('about') || '';
  document.getElementById('events-content').value = localStorage.getItem('events') || '';
  document.getElementById('gallery-content').value = localStorage.getItem('gallery') || '';
  document.getElementById('donate-content').value = localStorage.getItem('donate') || '';
  document.getElementById('contact-content').value = localStorage.getItem('contact') || '';
}

// Save functions
function saveHome() {
  localStorage.setItem('home', document.getElementById('home-content').value);
  alert('হোম কনটেন্ট সংরক্ষিত হয়েছে!');
}
function saveAbout() {
  localStorage.setItem('about', document.getElementById('about-content').value);
  alert('ইতিহাস সংরক্ষিত হয়েছে!');
}
function saveEvents() {
  localStorage.setItem('events', document.getElementById('events-content').value);
  alert('ইভেন্ট সংরক্ষিত হয়েছে!');
}
function saveGallery() {
  localStorage.setItem('gallery', document.getElementById('gallery-content').value);
  alert('গ্যালারি সংরক্ষিত হয়েছে!');
}
function saveDonate() {
  localStorage.setItem('donate', document.getElementById('donate-content').value);
  alert('ডোনেশন সংরক্ষিত হয়েছে!');
}
function saveContact() {
  localStorage.setItem('contact', document.getElementById('contact-content').value);
  alert('যোগাযোগ সংরক্ষিত হয়েছে!');
}