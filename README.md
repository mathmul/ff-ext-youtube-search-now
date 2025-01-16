# ff-ext-youtube-search-now

This extension has two stages.

In the first stage it checks whether a newly opened tab is a secure YouTube site
(https://www.youtube.com or https://youtube.com). If it is not, it does nothing,
and that's it.

In the second stage ie. if it _is_ a secure YouTube site, all it does is the
following:
```js
const searchInput = document.querySelector('input[name="search_query"]');
if (searchInput) {
    searchInput.focus();
    searchInput.click();
    searchInput.dispatchEvent(new Event('focus', { bubbles: true }));
    console.log('Search input focused by "YouTube Search Now" extension')
}
```

The extension needs no additional permissions, nor does it collect any data.

## Links

### Firefox

[addons.mozilla.org/.../youtube-search-now/](https://addons.mozilla.org/en-US/firefox/addon/youtube-search-now/)

### Chrome / Brave / Chromium / ...

[chrome.google.com/.../youtube-search-now](https://chrome.google.com/webstore/detail/youtube-search-now/nfbhcehfdnbkehaafccoflaomodlhheb) ([GitHub repo](https://github.com/mathmul/chr-ext-youtube-search-now))
