let newsletter = document.getElementById('newsletter');
let errors = document.getElementById('errors');


const validate = (event) => {
    let name = document.getElementById('name');
    let email = document.getElementById('emial');
    let zgoda1 = document.getElementById('zgoda1');
    let errors = document.getElementById('errors');
    errors.innerHTML = '';

    if(name.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Pole musi zawierać imię i nazwisko!';
        errors.appendChild(liError);
    }
    if (email.value.trim() === '' ) {
        let liError = document.createElement('li');
        liError.innerText = 'Pole musi zawierać adres email!';
        errors.appendChild(liError);
    }

    if(!email.value.includes('@')){
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać znak @ !';
        errors.appendChild(liError);
    }
    
    if(!zgoda1.chceked){
        let liError = document.createElement('li');
        liError.innerText = 'Pierwsza zgoda musi być zaznaczona!';
        errors.appendChild(liError);
    }

    if(errors.children.length > 0) {
        event.preventDefault();
    }

}

const zgody = (event) => {
    let zgoda1 = document.getElementById('zgoda1');
    let zgoda2 = document.getElementById('zgoda2');

    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;
}

newsletter.addEventListener('submit', validate);
errors.addEventListener('change', zgody);