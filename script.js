// For dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// For dynamic time (very basic example, the original site might use a library or more robust solution)
// This is just to show where JS would go. The original site's time is static on load,
// but you could make it update.
function updateTime() {
    // This is a placeholder. The original site's time seems fixed,
    // but if you wanted it dynamic:
    // const now = new Date();
    // const timeString = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    // document.getElementById('time').textContent = timeString;
}
// updateTime(); // Call if you want to set it on load
// setInterval(updateTime, 60000); // Update every minute if needed
