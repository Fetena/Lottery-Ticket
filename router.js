// /router.js
const routes = {
    '/dashboard': 'BranchAdmin/Dashboard/index.html',
    '/tickets': 'BranchAdmin/Tickets/index.html',
    // Add all your paths here
};

async function router() {
    const path = window.location.hash.slice(1) || '/dashboard';
    const componentPath = routes[path];
    
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById('app-view').innerHTML = html;
}

window.addEventListener('hashchange', router);
router();
