document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('search-term').value;
        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `search_term=${searchTerm}`
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('user-table').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    });
});
