const searchInput = document.querySelector('input[name="search_query"]');
if (searchInput) {
    searchInput.focus();
    searchInput.click();
    searchInput.dispatchEvent(new Event('focus', { bubbles: true }));
    console.log('Search input focused by "YouTube Search Now" extension')
}
