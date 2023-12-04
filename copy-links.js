let urls = document.querySelectorAll('#search a');
var links = [];
urls.forEach(function (url) {
    let searchLink = url.getAttribute('href');
    if (searchLink && !links.includes(searchLink)) links.push(searchLink);
});
var linkAsText = links.join("\r\n");

var tempTextArea = document.createElement('textarea');
tempTextArea.value = linkAsText;
document.body.appendChild(tempTextArea);
tempTextArea.select();
document.execCommand('copy');

document.body.removeChild(tempTextArea);
console.log('%cLinks copied to clipboard!', 'color: #00ff00; font-weight:bold;');
