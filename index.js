const header = document.querySelector('.header')
const hamburgerPoints = document.querySelector('.hamburger-points')
const icons = document.querySelector('.icons')
const logo = document.querySelector('.logo')
const headerContainer = document.querySelector('.header-container')
const mainContent = document.querySelector('.main-content')
const links = document.querySelector('.links')
const closeBtn = document.querySelector('.close-btn')
const logoWhite = document.querySelector('.logo-fox-white')
const cart = document.querySelector('.cart')

const hamburgerPointsBtn = document.querySelector('.button-hamburger-points')
hamburgerPointsBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)
cart.addEventListener('click', (event) => {
    if (event.target.className === 'cart') {
        cartBlock.style.display = 'none'
    }
})

function showMenu() {
    header.classList.remove('header')
    header.classList.add('header-menu')
    headerContainer.classList.remove('header-container')
    headerContainer.classList.add('header-container-menu')
    links.classList.remove('links')
    links.classList.add('links-menu')
    logo.classList.remove('logo')
    logo.classList.add('logo-menu')
    mainContent.classList.remove('main-content')
    mainContent.classList.add('main-content-menu')
    hamburgerPoints.classList.remove('hamburger-points')
    hamburgerPoints.classList.add('hamburger-points-menu')
    icons.classList.remove('icons')
    icons.classList.add('icons-menu')
    if (document.location.pathname.includes('our-history') || document.location.pathname.includes('all-items')) {
        logoWhite.setAttribute('src', './img/logo-foxminded-white.png')
    }
}

function hideMenu() {
    const headerMenu = document.querySelector('.header-menu')
    const headerContainerMenu = document.querySelector('.header-container-menu')
    const linksMenu = document.querySelector('.links-menu')
    const logoMenu = document.querySelector('.logo-menu')
    const mainContentMenu = document.querySelector('.main-content-menu')
    const hamburgerPointsMenu = document.querySelector('.hamburger-points-menu')
    const iconsMenu = document.querySelector('.icons-menu')
    headerMenu.classList.remove('header-menu')
    headerMenu.classList.add('header')
    headerContainerMenu.classList.remove('header-container-menu')
    headerContainerMenu.classList.add('header-container')
    linksMenu.classList.remove('links-menu')
    linksMenu.classList.add('links')
    logoMenu.classList.remove('logo-menu')
    logoMenu.classList.add('logo')
    mainContentMenu.classList.remove('main-content-menu')
    mainContentMenu.classList.add('main-content')
    hamburgerPointsMenu.classList.remove('hamburger-points-menu')
    hamburgerPointsMenu.classList.add('hamburger-points')
    iconsMenu.classList.remove('icons-menu')
    iconsMenu.classList.add('icons')
    if (document.location.pathname.includes('our-history') || document.location.pathname.includes('all-items')) {
        logoWhite.setAttribute('src', `img/logo-new.png`)
    }
}

const totalQuantity = document.querySelector('.cart-total-quantity')
const cartTotalBlock = document.querySelector('.cart-total')
const cartBlock = document.querySelector('.cart')
const cartIcon = document.querySelector('.cart-icon-header')
const cartClose = document.querySelector('.cart-content-close-img')
const productPlace = document.querySelector('.cart-products')

cartIcon.addEventListener('click', () => {
    cartBlock.style.display = 'block'
    showProductsCart()
})
cartClose.addEventListener('click', () => {
    cartBlock.style.display = 'none'
})
productPlace.addEventListener('click', (event) => {
    cartControls(event)
})

function showProductsCart() {
    if (JSON.parse(localStorage.getItem("product")) === null) {
        localStorage.setItem("product", JSON.stringify([]));
    }
    const array = JSON.parse(localStorage.getItem("product"))
    productPlace.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        const cartProduct = document.createElement("div")
        cartProduct.classList.add('cart-product')
        productPlace.appendChild(cartProduct)
        cartProduct.setAttribute('data-id', `${array[i].id}`)

        const productDescription = document.createElement("div")
        productDescription.classList.add('cart-product-description')
        cartProduct.appendChild(productDescription)

        const productDescriptionImg = document.createElement("img")
        productDescriptionImg.classList.add('cart-product-description-img')
        productDescription.appendChild(productDescriptionImg)
        productDescriptionImg.setAttribute('src', `${array[i].image}`)
        productDescriptionImg.setAttribute('alt', 'image-product')

        const productDescriptionText = document.createElement("div")
        productDescriptionText.classList.add('cart-product-description-text')
        productDescription.appendChild(productDescriptionText)

        const productName = document.createElement("div")
        productName.classList.add('cart-product-name')
        productDescriptionText.appendChild(productName)

        const productNameSpan = document.createElement("span")
        productNameSpan.classList.add('cart-product-name-span')
        productName.appendChild(productNameSpan)
        productNameSpan.innerHTML = `${array[i].name}`

        const productPrice = document.createElement("div")
        productPrice.classList.add('cart-product-price')
        productDescriptionText.appendChild(productPrice)

        const productPriceSpan = document.createElement("span")
        productNameSpan.classList.add('cart-product-price-span')
        productPrice.appendChild(productPriceSpan)
        productPriceSpan.innerHTML = `${array[i].price}$`

        const productControls = document.createElement("div")
        productControls.classList.add('cart-product-controls')
        cartProduct.appendChild(productControls)

        const controlsQuantityBlock = document.createElement("div")
        controlsQuantityBlock.classList.add('controls-quantity-block')
        productControls.appendChild(controlsQuantityBlock)

        const quantityMinus = document.createElement("button")
        quantityMinus.classList.add('controls-quantity-minus')
        controlsQuantityBlock.appendChild(quantityMinus)
        quantityMinus.innerHTML = '-'

        const controlsQuantityField = document.createElement("div")
        controlsQuantityField.classList.add('controls-quantity-field')
        controlsQuantityBlock.appendChild(controlsQuantityField)

        const controlsQuantity = document.createElement("span")
        controlsQuantity.classList.add('controls-quantity')
        controlsQuantityField.appendChild(controlsQuantity)
        controlsQuantity.innerHTML = `${array[i].quantity}`

        const quantityPlus = document.createElement("button")
        quantityPlus.classList.add('controls-quantity-plus')
        controlsQuantityBlock.appendChild(quantityPlus)
        quantityPlus.innerHTML = '+'

        const controlsRemoveBtn = document.createElement("button")
        controlsRemoveBtn.classList.add('rem-btn')
        controlsRemoveBtn.classList.add('controls-remove-btn')
        productControls.appendChild(controlsRemoveBtn)
        controlsRemoveBtn.setAttribute('data-id', `${array[i].id}`)

        const controlsRemoveBtnSpan = document.createElement("span")
        controlsRemoveBtnSpan.classList.add('rem-btn')
        controlsRemoveBtnSpan.classList.add('controls-remove-btn-span')
        controlsRemoveBtn.appendChild(controlsRemoveBtnSpan)
        controlsRemoveBtnSpan.setAttribute('data-id', `${array[i].id}`)
        controlsRemoveBtnSpan.innerHTML = `Remove`

        const controlsRemoveBtnImg = document.createElement("img")
        controlsRemoveBtnImg.classList.add('rem-btn')
        controlsRemoveBtnImg.classList.add('controls-remove-btn-img')
        controlsRemoveBtn.appendChild(controlsRemoveBtnImg)
        controlsRemoveBtnImg.setAttribute('data-id', `${array[i].id}`)
        controlsRemoveBtnImg.setAttribute('src', 'img/cross-with-background.png')
        controlsRemoveBtnImg.setAttribute('alt', 'btn')
    }
    cartTotal()
}

showProductsCart()

function cartControls(event) {
    if (event.target.classList[0] === 'rem-btn') {
        const receivedId = event.target.getAttribute('data-id')
        const arrayProduct = JSON.parse(localStorage.getItem("product"))
        const index = arrayProduct.findIndex(item => item.id === receivedId);
        arrayProduct.splice(index, 1);
        localStorage.setItem("product", JSON.stringify(arrayProduct));
        showProductsCart()
        quantityProductsRefresh()
    }
    if (event.target.classList[0] === 'controls-quantity-minus') {
        const receivedId = event.target.parentElement.parentElement.parentElement.getAttribute('data-id')
        const arrayProduct = JSON.parse(localStorage.getItem("product"))
        for (let i = 0; i < arrayProduct.length; i++) {
            if (arrayProduct[i].id === receivedId && arrayProduct[i].quantity === 1) {
                const index = arrayProduct.findIndex(item => item.id === receivedId);
                arrayProduct.splice(index, 1);
                localStorage.setItem("product", JSON.stringify(arrayProduct));
                showProductsCart()
                quantityProductsRefresh()
            }
            else if (arrayProduct[i].id === receivedId && arrayProduct[i].quantity > 1) {
                arrayProduct[i].quantity--
                localStorage.setItem("product", JSON.stringify(arrayProduct));
                showProductsCart()
                quantityProductsRefresh()
            }
        }
    }
    if (event.target.classList[0] === 'controls-quantity-plus') {
        const receivedId = event.target.parentElement.parentElement.parentElement.getAttribute('data-id')
        const arrayProduct = JSON.parse(localStorage.getItem("product"))
        for (let i = 0; i < arrayProduct.length; i++) {
            if (arrayProduct[i].id === receivedId) {
                arrayProduct[i].quantity++
                localStorage.setItem("product", JSON.stringify(arrayProduct));
                showProductsCart()
                quantityProductsRefresh()
            }
        }
    }
}

function cartTotal() {
    const arrayProduct = JSON.parse(localStorage.getItem("product"))
    let total = 0
    arrayProduct.forEach((elem) => {
        total += elem.quantity * elem.price
    })
    totalQuantity.innerHTML = `$${total.toFixed(2)}`
    if (total === 0) {
        cartTotalBlock.style.display = 'none'
    } else {
        cartTotalBlock.style.display = 'block'
    }
}
cartTotal()

const quantityProducts = document.querySelector('.quantity-products')
const quantityProductsBlock = document.querySelector('.quantity-products-block')


function quantityProductsRefresh() {
    const arrayProduct = JSON.parse(localStorage.getItem("product"))
    // quantityProductsBlock.style.display = 'block'
    let sumQuantityProducts = 0
    arrayProduct.forEach((product) => {
        sumQuantityProducts += product.quantity
    })
    quantityProducts.innerHTML = `${sumQuantityProducts}`
    if (sumQuantityProducts) {
        quantityProductsBlock.style.display = 'block'
    } else {
        quantityProductsBlock.style.display = 'none'
    }
}


quantityProductsRefresh()

window.addEventListener("load", () => {
    setTimeout(() => {
        const body = document.body,
            html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        cartBlock.style.height = `${height}px`
    }, 500);
});

export { quantityProductsRefresh };