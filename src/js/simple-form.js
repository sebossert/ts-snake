function simpleForm(name, obj) {
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.innerText = name;
    let form = document.createElement('form');
    for(let prop in obj) {
        addFormElement(form, prop, obj);
    }
    form.setAttribute('data-obj', obj);
    fieldset.appendChild(legend);
    fieldset.appendChild(form);
    document.getElementById('simple-form').appendChild(fieldset);
}
function addFormElement(form, name, obj) {
    let input = document.createElement('input');
    input.name = name;
    input.value = obj[name];
    input.onchange = function(evt) {
        obj[name] = evt.srcElement.value;
    };
    let label = document.createElement('label');
    label.for = name;
    label.innerText = name;
    let container = document.createElement('div');
    container.appendChild(label);
    container.appendChild(document.createElement('br'));
    container.appendChild(input);
    form.appendChild(container);
    form.appendChild(document.createElement('hr'));
}
