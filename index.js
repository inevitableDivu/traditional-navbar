const menuButton = document.getElementById('menu-button')
const navItemList = document.getElementById('nav-items-list')
const functionButton = document.getElementById('function-button')
const functionMenuContainer = document.getElementById('function-menu-container')
const navMenuDesktop = document.getElementById('nav-menu-list-desktop')

menuButton.addEventListener('click', (_event) => {
    navItemList.classList.toggle('open')
    navItemList.classList.toggle('close')
    functionMenuContainer.classList.remove('open')

    if (navItemList.className.includes('open')) {
        functionButton.addEventListener('click', () => {
            functionMenuContainer.classList.add('open')
        })
    }
})

for (let i = 0; i < navMenuDesktop.children.length; i++) {
    navMenuDesktop.children.item(i).addEventListener('click', () => {
        navMenuDesktop.children.item(i).children.item(0).classList.add('active')
        for (let j = 0; j < navMenuDesktop.children.length; j++) {
            if (i !== j) {
                navMenuDesktop.children.item(j).children.item(0).classList.remove('active')
            }
        }
    })
}