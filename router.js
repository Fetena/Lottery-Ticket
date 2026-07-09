// /router.js
const routes = {
    '/BranchAdmin': 'BranchAdmin/index.html',
    '/Customer': 'Customer/index.html',
    '/MainAdmin': 'MainAdmin/index.html',
    '/Public': 'Public/index.html'
};

async function router() {
    const hash = window.location.hash.slice(1) || '/Public'; // Default to Public
    const parentCategory = hash.split('/')[1]; 
    const componentPath = routes['/' + parentCategory];

    if (componentPath) {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById('app-view').innerHTML = html;
        
        // Trigger the logic loading once the HTML is injected
        const event = new CustomEvent('moduleLoaded', { detail: hash });
        window.dispatchEvent(event);
    }
}

window.addEventListener('hashchange', router);
router();
