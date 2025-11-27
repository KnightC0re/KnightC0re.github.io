// Timestamp Link Generation
// Get original mod text
let text = document.getElementById("ogMod1").innerHTML;
let text2 = document.getElementById("ogMod2").innerHTML;

// Timestamp formatting
const timecode = /[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\-|[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]\s?\(.*?\)\s?\-/g;

// Generate link based on timestamp
const replacement = function(time) {
	return `<a href="osu://edit/${time}">${time}</a>`;
}

// Find all timestamps to replace with linked versions
const replaced = text.replace(timecode, replacement);
const replaced2 = text2.replace(timecode, replacement);

// Duplicated mod post with links
document.getElementById("endResult1").innerHTML = replaced;
document.getElementById("endResult2").innerHTML = replaced2;

// View Modes
const modNum = 2;

const end = document.getElementById('endResult1');
const end2 = document.getElementById('endResult2');

const modButton1 = document.getElementById("mod1");
const modButton2 = document.getElementById("mod2");
modButton1.onclick = function () { ShowMod(1) };
modButton2.onclick = function () { ShowMod(2) };

function ShowMod(num) {
    for (let i = 1; i <= modNum; i++) {
        document.getElementById("endResult" + i).hidden = true;
    }

    document.getElementById("endResult" + num).hidden = false;
}