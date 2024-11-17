// Convert navigation image map to actual links
function convertImageMapToLinks() {
  const map = document.querySelector('map');
  if (!map) return;

  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  
  const areas = map.querySelectorAll('area');
  areas.forEach(area => {
    const link = document.createElement('a');
    link.href = area.href;
    link.textContent = area.href.split('/').pop().replace('.html', '').toUpperCase();
    link.style.textDecoration = 'none';
    nav.appendChild(link);
  });

  // Replace the image and map with the new navigation
  const img = document.querySelector('img[usemap]');
  if (img && img.parentNode) {
    img.parentNode.replaceChild(nav, img);
    map.remove();
  }
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  convertImageMapToLinks();
});
