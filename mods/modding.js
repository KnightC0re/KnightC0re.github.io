// Get original mod text
let text = document.getElementById("ogMod").innerHTML;

// Timestamp formatting
const timecode = /[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\-|[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\(.*?\)\s?\-/g;

// Generate link based on timestamp
const replacement = function(time) {
	return `<a href="osu://edit/${time}">${time}</a>`;
}

// Find all timestamps to replace with linked versions
const replaced = text.replace(timecode, replacement);

// Duplicated mod post with links
document.getElementById("endResult").innerHTML = replaced;