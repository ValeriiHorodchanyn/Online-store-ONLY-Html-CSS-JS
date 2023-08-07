const subscribeBtn = document.querySelector('.subscribe-btn')
const inputSubscribeBtn = document.querySelector('.third-section-input')
const messageText = document.querySelector('.message-text')

inputSubscribeBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        isEmail()
    }
})
subscribeBtn.addEventListener('click', isEmail)

function isEmail() {
    const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!inputSubscribeBtn.value) {
        messageText.innerHTML = 'You must write Email in this field'
        messageText.classList.remove('message-text')
        messageText.classList.remove('message-text-green')
        messageText.classList.add('message-text-red')
        return
    }
    if (patternEmail.test(inputSubscribeBtn.value)) {
        console.log(true)
        messageText.innerHTML = 'The email has been verified and sent'
        messageText.classList.remove('message-text')
        messageText.classList.remove('message-text-red')
        messageText.classList.add('message-text-green')
        inputSubscribeBtn.value = ''
    }
    else {
        messageText.innerHTML = 'You must write your correct Email'
        messageText.classList.remove('message-text')
        messageText.classList.remove('message-text-green')
        messageText.classList.add('message-text-red')
        inputSubscribeBtn.value = ''
    }
}