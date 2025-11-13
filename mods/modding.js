// View Modes
const og = document.getElementById('ogMod');
const end = document.getElementById('endResult');

const simpleButton = document.getElementById("Simplified");
simpleButton.onclick = function () { ToggleViewMode() };

let simplifiedView = false;

function ToggleViewMode() {
    simplifiedView = !simplifiedView;

    og.classList.toggle('hide');
    end.classList.toggle('hide');

    if (simplifiedView) {
        simpleButton.textContent = "Formatted View";
    }
    else {
        simpleButton.textContent = "Simplified View (Text Only)";
    }
}

// Timestamp Link Generation
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