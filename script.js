async function loadHtml(url, targetId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    console.error('Error loading HTML:', error);
  }
}

(async () => {
  await loadHtml('navbar.html', 'navbar'); // Fetch navbar html

  // After navbar is loaded, load the rest of the HTML
  const navButton = document.querySelector(".nav-button");
  const navBarLower = document.querySelector(".nav-bar-lower");
  const transitionTime = 200;
  var displaying = false;
  console.log(navButton); // just to be safe :p hehe


  // function to handle hiding the nav bar
  function hideNavBox() {
    if (!displaying) return
    navBarLower.classList.remove('visible')
    displaying = false
    setTimeout(() => {
      navBarLower.style.display = 'none'
    }, transitionTime)
  }

  // function to handle showing the nav bar
  function showNavBox() {
    if (displaying) return
    navBarLower.style.display = 'flex'
    displaying = true
    navBarLower.classList.add('visible')
  }

  // listening for click event
  navButton.addEventListener("click", () => {
    if (!displaying) showNavBox()
    else hideNavBox()
  });

  // listening for when unfocused
  navButton.addEventListener("blur", () => {
    hideNavBox()
  });
})();