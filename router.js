// /router.js
const routes = {
    '/BranchAdmin': 'BranchAdmin/index.html',
    '/Customer': 'Customer/index.html',
    '/MainAdmin': 'MainAdmin/index.html',
    '/Public': 'Public/index.html'
};

async function router() {
    const hash = window.location.hash || '#/Public/Hero';
    const parts = hash.split('/'); // ['#', 'Parent', 'SubModule']
    const parentPath = `/${parts[1]}`;
    
    const componentPath = routes[parentPath];
    if (componentPath) {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById('app-view').innerHTML = html;
        
        // Dispatch event for parent index.html to catch
        window.dispatchEvent(new CustomEvent('loadSubModule', { detail: parts[2] }));
    }
}
window.addEventListener('hashchange', router);
router();
