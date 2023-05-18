document.addEventListener('DOMContentLoaded', init)

function init() {
    
    
    const formE1 = document.querySelector('form')
    
    
    if (formE1)
    formE1.addEventListener('submit',handleSubmit)
}


function handleSubmit(e){
    e.preventDefault()



    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value

  


if (firstName !== '' && lastName !== ''){
    
    const NewLi = document.createElement('li')
    NewLi.classList.add('users-list__person')
    
    NewLi.innerText = firstName + ' ' + lastName
    
    const newUL = e.target.nextElementSibling
    newUL.appendChild(NewLi)
}else {
    alert('Wprowadź dane')
}

}

