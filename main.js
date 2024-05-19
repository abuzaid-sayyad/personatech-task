document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const sidebar = document.getElementById('profile-sidebar');

    btn.addEventListener('click', function() {
        sidebar.classList.toggle('visible');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== btn) {
            sidebar.classList.remove('visible');
        }
    });
});