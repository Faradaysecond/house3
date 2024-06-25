const msgSent = document.querySelector('.messeng--sent')
const msgError = document.querySelector('.messeng--error')

if(document.location.search === '?mail_status=sent'){
    msgSent.classList.remove('none')

    setTimeout(()=>{
        msgSent.classList.add('none')
    }, 2500)
}

if(document.location.search === '?mail_status=error'){
    msgError.classList.remove('none')

    setTimeout(()=>{
        msgError.classList.add('none')
    }, 2500)
}
