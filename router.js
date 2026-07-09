// /router.js
const routes = {
    '/BranchAdmin': 'BranchAdmin/index.html',
    '/Customer': 'Customer/index.html',
    '/MainAdmin': 'MainAdmin/index.html',
    '/Public': 'Public/index.html'
};

async function router() {
    // Determine the parent category (e.g., 'MainAdmin')
    const path = window.location.hash.slice(1); // '/MainAdmin/Dashboard'
    const parentCategory = path.split('/')[1]; // 'MainAdmin'
    
    const componentPath = routes['/' + parentCategory];
    
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById('app-view').innerHTML = html;
}
