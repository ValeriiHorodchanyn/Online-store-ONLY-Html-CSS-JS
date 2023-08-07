const inputRange = document.querySelector('.input-range')
const rangeValue = document.querySelector('.range-value')
const itesFlexbox = document.querySelector('.ites-flexbox')
const buttons = document.querySelector('.type-buttons')
const inputSearch = document.querySelector('.input-search')
const buttonSearch = document.querySelector('.button-search')

getAllProducts()

// Filter products by name
inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        filterProductsByName(inputSearch.value)
        inputSearch.value = ''
    }
})
buttonSearch.addEventListener('click', () => {
    filterProductsByName(inputSearch.value)
    inputSearch.value = ''
})
async function filterProductsByName(value) {
    let data = await (await fetch('./json/products.json')).json();
    const uniqueArray = data.filter(i => i.name.toLowerCase().includes(value.toLowerCase()))
    itesFlexbox.innerHTML = ''
    showProducts(uniqueArray)

}

// Filter products by Group
buttons.addEventListener('click', (elem) => {
    if (elem.target.classList[0] === 'type-button') {
        filterProductsByGroup(elem.target.classList[1].slice(5))
    }
})
async function filterProductsByGroup(value) {
    let data = await (await fetch('./json/products.json')).json();
    if (value === 'all') {
        itesFlexbox.innerHTML = ''
        showProducts(data)
    }
    else if (value === 'forest' || value === 'foxkid' || value === 'home') {
        const uniqueArray = data.filter(i => i.type === `${value[0].toUpperCase() + value.slice(1)}`)
        itesFlexbox.innerHTML = ''
        showProducts(uniqueArray)
    }
    else {
        const uniqueArray = data.filter(i => i.type != `Forest` && i.type != `Foxkid` && i.type != `Home`)
        itesFlexbox.innerHTML = ''
        showProducts(uniqueArray)
    }
}

// Filter products by price
inputRange.addEventListener('input', () => {
    rangeValue.innerHTML = `Value: $${inputRange.value}`
    inputRange.style.background = `linear-gradient(to right, #ba2525 0%, #ba2525 ${inputRange.value / (inputRange.getAttribute('max') / 100)}%, #b8b6bf ${inputRange.value / (inputRange.getAttribute('max') / 100)}%, #b8b6bf 100%)`
    filterProductsByPrice(inputRange.value)
})
async function filterProductsByPrice(value) {
    let data = await (await fetch('./json/products.json')).json();
    const uniqueArray = data.filter(i => i.price <= value)
    itesFlexbox.innerHTML = ''
    showProducts(uniqueArray)
}

// Get all products
async function getAllProducts() {
    let data = await (await fetch('./json/products.json')).json();
    showProducts(data)
}

function showProducts(array) {
    for (let i = 0; i < array.length; i++) {
        const product = document.createElement("div")
        product.classList.add('product')
        itesFlexbox.appendChild(product)
        const productImg = document.createElement("div")
        productImg.classList.add('product-image')
        product.appendChild(productImg)
        const productImgImg = document.createElement("img")
        productImgImg.classList.add('product-image-img')
        productImg.appendChild(productImgImg)
        productImgImg.setAttribute('src', `${array[i].image}`)
        productImgImg.setAttribute('alt', `fox-image`)
        const buttonProduct = document.createElement("button")
        buttonProduct.classList.add('add-btn')
        productImg.appendChild(buttonProduct)
        buttonProduct.setAttribute('data-id', `${array[i].id}`)
        const firstParagraphButton = document.createElement("p")
        buttonProduct.appendChild(firstParagraphButton)
        firstParagraphButton.innerHTML = '+'
        const secondParagraphButton = document.createElement("p")
        buttonProduct.appendChild(secondParagraphButton)
        secondParagraphButton.innerHTML = 'Add'
        const productDescription = document.createElement("div")
        productDescription.classList.add('product-description')
        product.appendChild(productDescription)
        const productName = document.createElement("span")
        productName.classList.add('product-name')
        productDescription.appendChild(productName)
        productName.innerHTML = `${array[i].name}`
        const productPrice = document.createElement("span")
        productPrice.classList.add('product-price')
        productDescription.appendChild(productPrice)
        productPrice.innerHTML = `$${array[i].price.toFixed(2)}`
        const productRating = document.createElement("span")
        productRating.classList.add('product-rating')
        productDescription.appendChild(productRating)
        productRating.innerHTML = '★★★★★'
        const productType = document.createElement("span")
        productType.classList.add('product-type')
        productDescription.appendChild(productType)
        productType.innerHTML = `${array[i].type}`
    }
}

//CART
itesFlexbox.addEventListener('click', (event) => {
    if (event.target.parentElement.getAttribute('class') === 'add-btn') {
        pushToLocalStore(event)
    }
})
async function pushToLocalStore(event) {
    const idElem = event.target.parentElement.getAttribute('data-id')
    let data = await (await fetch('./json/products.json')).json();
    const uniqueArray = data.filter(i => i.id === idElem)
    uniqueArray[0].quantity = 1
    if (localStorage.getItem("product") === null) {
        localStorage.setItem("product", JSON.stringify([uniqueArray[0]]));
    }
    else {
        let receivedItems = JSON.parse(localStorage.getItem("product"))
        const booleanArray = []
        receivedItems.forEach(e => {
            if (e.id === uniqueArray[0].id) {
                booleanArray.push('true')
            }
            else {
                booleanArray.push('false')
            }
            if (e.id === uniqueArray[0].id) {
                e.quantity++
                localStorage.setItem("product", JSON.stringify(receivedItems));
            }

        })
        if (!booleanArray.includes('true')) {
            receivedItems.push(uniqueArray[0])
            localStorage.setItem("product", JSON.stringify(receivedItems));
        }
    }
}

buttons.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'type-button' || event.target.classList[1] === 'type-button') {
        if (event.target.classList[1] === 'type-forest') {
            reColorBtn()
            event.target.classList.remove('type-button')
            event.target.classList.add('type-button-checked')
        }
        if (event.target.classList[1] === 'type-home') {
            reColorBtn()
            event.target.classList.remove('type-button')
            event.target.classList.add('type-button-checked')
        }
        if (event.target.classList[1] === 'type-all') {
            reColorBtn()
            event.target.classList.remove('type-button')
            event.target.classList.add('type-button-checked')
        }
        if (event.target.classList[1] === 'type-foxkid') {
            reColorBtn()
            event.target.classList.remove('type-button')
            event.target.classList.add('type-button-checked')
        }
        if (event.target.classList[1] === 'type-other') {
            reColorBtn()
            event.target.classList.remove('type-button')
            event.target.classList.add('type-button-checked')
        }
    }
})

function reColorBtn() {
    const buttonsAll = document.querySelectorAll('.type-button-checked')
    buttonsAll.forEach(btn => {
        btn.classList.remove('type-button-checked')
        btn.classList.add('type-button')
        if(btn.classList[1] === 'type-button'){
            const x = btn.classList[0]
            btn.classList.remove(x)
            btn.classList.add(x)
        }
    });
}