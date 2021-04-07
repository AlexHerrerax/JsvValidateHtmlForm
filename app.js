let form = document.querySelector("#form");



form.addEventListener('submit', function(e){
    e.preventDefault();

    //Numero tarjeta . 
    if(form.numberCard.value==="" || !(/^[0-9]+$/).test(form.numberCard.value) ){
        form.numberCard.classList.add('is-invalid');
    }else{
        form.numberCard.classList.remove('is-invalid');
        form.numberCard.classList.add('is-valid');
    }

    //Cvc
    if(form.cvc.value==="" || !(/^[0-9]+$/).test(form.cvc.value) ){
        form.cvc.classList.add('is-invalid');
    }else{
        form.cvc.classList.remove('is-invalid');
        form.cvc.classList.add('is-valid');
    }

    //Amount
    if(form.amount.value==="" || !(/^[0-9]+$/).test(form.amount.value) ){
        form.amount.classList.add('is-invalid');
    }else{
        form.amount.classList.remove('is-invalid');
        form.amount.classList.add('is-valid');
    }


    //Nombre
    if(form.firstName.value==="" || !(/^[A-Za-z\s]+$/).test(form.firstName.value) ){
        form.firstName.classList.add('is-invalid');
    }else{
        form.firstName.classList.remove('is-invalid');
        form.firstName.classList.add('is-valid');
    }

    //Apellido
    if(form.lastName.value==="" || !(/^[A-Za-z\s]+$/).test(form.lastName.value) ){
        form.lastName.classList.add('is-invalid');
    }else{
        form.lastName.classList.remove('is-invalid');
        form.lastName.classList.add('is-valid');
    }

    

    //Postal
    if(form.postalCode.value==="" || !(/^[0-9]+$/).test(form.postalCode.value) ){
        form.postalCode.classList.add('is-invalid');
    }else{
        form.postalCode.classList.remove('is-invalid');
        form.postalCode.classList.add('is-valid');
    }

    //City
    if(form.city.value==="" || !(/^[A-Za-z\s]+$/).test(form.city.value) ){
        form.city.classList.add('is-invalid');
    }else{
        form.city.classList.remove('is-invalid');
        form.city.classList.add('is-valid');
    }

    //State

    if(form.state.value==="state"){
        form.state.classList.add('is-invalid');
    }else{
        form.state.classList.remove('is-invalid');
        form.state.classList.add('is-valid');
    }




})