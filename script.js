function toggleMainModule(moduleId) {
    // Get the selected module element
    const selectedModule = document.getElementById(moduleId);
    
    // Check if the module is already visible
    if (selectedModule.style.display === 'block') {
        // If it's visible, hide it
        selectedModule.style.display = 'none';
    } else {
        // If it's hidden, show it and hide other modules
        const allModules = document.querySelectorAll('.main-admin-module');
        allModules.forEach(module => {
            module.style.display = 'none'; // Hide all modules
        });
        selectedModule.style.display = 'block'; // Show the selected module
    }
}

function triggerUpload() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function() {
    if (this.files.length > 0) {
        alert('File selected: ' + this.files[0].name);
    }
});
