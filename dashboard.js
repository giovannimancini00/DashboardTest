// Switch between workspace sections
const sidebarLinks = document.querySelectorAll('#sidebar li');
const sections = document.querySelectorAll('.workspace-section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-section');
        sections.forEach(sec => {
            sec.classList.toggle('hidden', sec.id !== target);
        });
    });
});

// Placeholder for websocket/fetch logic
function initConnections() {
    console.log('Initialize WebSocket or fetch');
}

document.addEventListener('DOMContentLoaded', initConnections);
