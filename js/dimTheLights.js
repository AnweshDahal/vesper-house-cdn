var lightsOutElement = document.getElementById('lightsOut') // Get the canvas that dims the light

// Function to dim the lights
const lightsOut = () => {
  lightsOutElement.style = "display: block;"

}

// Function to turn on the lights
const lightsOn = () => {
  lightsOutElement.style = "display: none"
}


// Mutation change config
const config = {
  attributes: true,
  attributeFilter: ['aria-expanded',],
  attributeOldValue: true,
}

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    console.log(mutation)
    if (mutation.type === 'attributes') {
      if (mutation.target.getAttribute('aria-expanded') === 'true' && mutation.oldValue != 'true') {
        lightsOut()
      } else if (mutation.target.getAttribute('aria-expanded') === 'false' && mutation.oldValue != 'false') {
        lightsOn()
      }
    }
  }
}

(() => {
  // Implementation of dim the lights in Mega Menu for Wordpress
  var primaryMenu = document.querySelector('#mega-menu-primary-menu')

  const observer = new MutationObserver(callback)



  let links = primaryMenu.querySelectorAll('.mega-menu-link')

  lightsOn();

  links.forEach((link) => {
    if (link.getAttribute('aria-expanded') != null) {
      observer.observe(link, config)
    }
  });
})();