// Timestamp Link Generation
// Timestamp formatting
const timecode = /[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\-|[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\(.*?\)\s?\-/g;

// Generate link based on timestamp
const replacement = function (time) {
    return `<a href="osu://edit/${time}">${time}</a>`;
}

// Number of times modded on page
var modNum = 1;

// Convert timestamps into links
function GenerateTimestampLinks(num) {
    // Set modNum at start
    modNum = num;

    for (let i = 1; i <= modNum; i++) {
        // Get original mod text
        let text = document.getElementById("ogMod" + i).innerHTML;

        // Find all timestamps to replace with linked versions
        const replaced = text.replace(timecode, replacement);

        // Duplicated mod post with links
        document.getElementById("endResult" + i).innerHTML = replaced;
    }
}

// View Mods
function AssignModButtons() {
    for (let i = 1; i <= modNum; i++) {
        const modButton = document.getElementById("mod" + i);
        modButton.onclick = function () { ShowMod(i) };
    }
}

function ShowMod(num) {
    for (let i = 1; i <= modNum; i++) {
        document.getElementById("endResult" + i).hidden = true;
    }

    document.getElementById("endResult" + num).hidden = false;
}