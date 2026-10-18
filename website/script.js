document.getElementById('year').textContent = new Date().getFullYear();

// Adding this class kicks off the CSS keyframe animation defined
// on [data-reveal] elements. Wrapped so a missing element (if the
// markup above is edited) never throws an error.
try {
    document.documentElement.classList.add('is-ready');
} catch (err) {
    console.error('Could not start load animation:', err);
}

// Check if background image was loaded
// Otherwise, it should fallback to solid color background
// as in style.css file
var bgImg = new Image();
bgImg.onload = function(){
    document.body.style.backgroundImage = 'url(' + bgImg.src + ')';
    // Switch to the always-black-text palette (see style.css)
    document.documentElement.classList.add('has-bg');
};
bgImg.src = "background.jpg";
