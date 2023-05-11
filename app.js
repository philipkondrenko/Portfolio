// burger menu 
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// Dark mode
const darkModeButton = document.getElementById('dark-mode-button')
const darkModeSign = document.getElementById('dark-mode-image')
const darkModeH1 = document.querySelector('h1')
const darkModeBody = document.querySelector('.primary-container')
const darkModeH4 = document.querySelector('h4')
const darkModeNav = document.querySelector('header')
const darkModeNavLink = document.querySelectorAll('.nav-link')
const darkModeLogo = document.querySelector('.nav-branding')
const darkModeBorder = document.querySelector('header')
const darkModeSecondary = document.getElementById('secondary-container')
const darkModeSkillsTopBorder = document.querySelector('.skills')
const darkModeAboutTopBorder = document.querySelector('.about')
const darkModeBar = document.querySelectorAll('.bar')
const darkFooter = document.querySelector('footer')


darkModeButton.addEventListener('click', () => {
    if (darkModeSign.getAttribute('src') == "images/dark-mode.png") {
        darkModeSign.src = "images/dark-mode-light.png"
    } else {
        darkModeSign.src = "images/dark-mode.png"
    }

    darkModeH1.classList.toggle('dark-mode-toggle')
    darkModeBody.classList.toggle('dark-mode-toggle')
    darkModeH4.classList.toggle('dark-mode-toggle')
    darkModeNav.classList.toggle('dark-mode-toggle')
    for (let i = 0; i < darkModeNavLink.length; i+=1) {
        darkModeNavLink.item(i).classList.toggle('dark-mode-toggle')
    }

    for (let i = 0; i < darkModeBar.length; i+=1) {
        darkModeBar.item(i).classList.toggle('dark-mode-bar')
    }

    darkModeLogo.classList.toggle('dark-mode-toggle')
    darkModeBorder.classList.toggle('dark-mode-toggle-border')
    darkModeSecondary.classList.toggle('dark-mode-toggle')
    darkModeSkillsTopBorder.classList.toggle('dark-mode-toggle-top')
    darkModeAboutTopBorder.classList.toggle('dark-mode-toggle-top')
    darkFooter.classList.toggle('dark-footer')
})