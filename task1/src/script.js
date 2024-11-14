console.log('Hello world - view me in the Console of developer tools');

function id(id) {
    return document.getElementById(id);
}

function validLength(content, min, max) {
    return content != null && content.length >= min && content.length <= max;
}
function info(content) {
    id('form-result').value = content;
}

function selectAllCheckboxes(selected) {
    for(let e of document.getElementsByName('features')){
        e.checked = selected;
    }
    id('select-all-btn').value = selected ? 'Deselect All' : "Select All";
}

function validDob(val) {
    if(!/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(val)){
        return false;
    }
    let date = new Date(val);
    console.log('date is ', date);
    if(isNaN(date)) {
        return false;
    }
    return true;
}

function calculateAge() {
    let birthday = new Date(id('dob').value);
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    birthday.setFullYear(today.getFullYear());
    if(birthday.getTime() > today.getTime()) {
        age--;
    }
    return age;
}

function getFeatures() {
    let count = 0;
    let selected = [];
    let checkboxes = document.getElementsByName('features');
    for(let e of checkboxes) {
        if(e.checked) {
            count++;
            selected.push(e.value);
        }
    }
    if(count == 0) {
        return "no features"
    } else if (count == 1) {
        return selected[0];
    } else {
        let content = '';
        for(let i = 0; i < selected.length - 1; i++) {
            if( i > 0){
                content += ', ';
            }
            content += selected[i];
        }
        content += ' and ' + selected[selected.length - 1];
        return content;
    }
}

function init() {
    id('building-type').addEventListener('change', ()=>{});
    id('street-name').addEventListener('blur', ()=>{
        render();
    });
    for(let e of document.querySelectorAll("input[type='text']")) {
        e.addEventListener('blur', ()=>{render()});
    }
    id('building-type').addEventListener('change', ()=>{render()});
    for(let e of document.querySelectorAll("input")) {
        e.addEventListener('change', ()=>{render()});
    }
    for(let e of document.getElementsByName('features')){
        e.addEventListener('change', ()=>{
            let allSelected = true;
            for(let e of document.getElementsByName('features')) {
                if(!e.checked) {
                    allSelected = false;
                }
            }
            id('select-all-btn').value = allSelected ? 'Deselect All' : "Select All";
        });
    }
    id('select-all-btn').addEventListener('click', ()=>{
        let val = id('select-all-btn').value;
        selectAllCheckboxes(val == 'Select All');
        render();
    });
    id('reset-form').addEventListener('click', ()=>{
        id('street-name').value = '';
        id('suburb').value = '';
        id('postcode').value = '';
        id('dob').value = '';
        id('building-type').value = 'apartment';
        for(let e of document.getElementsByName('features')){
            e.checked = false;
        }
        info('');
    });
}

function render() {
    let content = '';
    if(!validLength(id('street-name').value, 3, 50)) {
        content = 'Please input a valid street name';
    } else if(!validLength(id('suburb').value, 3, 50)) {
        content = 'Please input a valid suburb';
    } else if(!/^\d{4}$/.test(id('postcode').value)) {
        content = 'Please input a valid postcode';
    } else if(!validDob(id('dob').value)) {
        content = 'Please enter a valid date of birth';
    } else {
        let age = calculateAge();
        let street = id('street-name').value;
        let suburb = id('suburb').value;
        let postcode = id('postcode').value;
        let bType = id('building-type').value;
        console.log('btype', bType);
        let building = bType == 'apartment' ? 'an apartment' : 'a house';
        let features = getFeatures();

        content = `You are ${age} years old, and your address is ${street} St, ${suburb}, ${postcode}, Australia. Your building is ${building}, and it has ${features}`;
    }
    info(content);
}

init();
