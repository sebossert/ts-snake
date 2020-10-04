var simpleForm = {
  create: function(name, obj) {
    let fieldset = document.createElement("fieldset");
    let form = this.createForm(obj);
    fieldset.appendChild(form);
    fieldset.appendChild(this.createLegend(name, form));
    return fieldset;
  },
  createForm: function(obj) {
    let form = document.createElement("form");
    for (let prop in obj) {
      form.appendChild(this.createInputContainer(prop, obj));
    }
    form.style.display = "none";
    form.setAttribute("data-obj", obj);
    return form;
  },
  createLegend: function(name, form) {
    let legend = document.createElement("legend");
    legend.innerText = name;
    legend.addEventListener("click", function() {
      form.style.display =
        form.style.display !== "none" ? "none" : "inline-block";
    });
    return legend;
  },
  createInputContainer: function(prop, obj) {
    let container = document.createElement("div");
    container.appendChild(this.createLabel(prop));
    container.appendChild(this.createInput(prop, obj));
    return container;
  },
  createLabel: function(prop) {
    let label = document.createElement("label");
    label.setAttribute("for", prop);
    label.innerText = prop;
    return label;
  },
  createInput: function(prop, obj) {
    if(typeof obj[prop] === 'object') {
        return this.create(prop, obj[prop]);
    }
    let input = document.createElement("input");
    input.name = prop;
    input.value = obj[prop];
    input.onchange = function(evt) {
      obj[prop] = evt.srcElement.value;
    };
    return input;
  },
};
