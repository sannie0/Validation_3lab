function validation(form){

    function removeError(input){
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.errorLabel').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input, text){
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')


        errorLabel.classList.add('errorLabel')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }

    function IsValidName(name){
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    }

    function validateEmailInput(input) {
        const tooltip = document.getElementById('email-tooltip');

        if (!/\S+@\S+\.\S+/.test(input.value)) {
            tooltip.style.visibility = 'visible';
        } else {
            tooltip.style.visibility = 'hidden';
        }
    }
    function IsValidEmail(email){
        return email !== "" && /\S+@\S+\.\S+/.test(email);
        return email !== "" && regex.test(email);
    }

    let result = true;

    const allInput = form.querySelectorAll('input')
    for(const input of allInput){
        removeError(input)

        if(input.value ===""){
            console.log('Ошибка поля');
            createError(input,'Поле не заполнено');
            result = false;
        }else{
            if(input.name==="name" && !IsValidName(input.value)){
                createError(input, 'Некорректное имя');
                console.log('Ошибка name');
                result = false;
            }
            if(input.name==="email" && !IsValidEmail(input.value)){
                createError(input, 'Некорректный email');
                console.log('Ошибка email');
                result = false;
            }
        }
    }

    return result;
}

document.getElementById('add-form').addEventListener('submit', function (event){
    event.preventDefault();
    //console.log('Form submitted');

    if(validation(this) == true){
        alert('Форма проверена успешно');
        this.reset();
    }
});
