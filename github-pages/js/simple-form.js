define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleForm = void 0;
    var SimpleForm = (function () {
        function SimpleForm(document) {
            this.document = document;
        }
        SimpleForm.prototype.createFieldset = function (name, obj) {
            var fieldset = this.document.createElement("fieldset");
            var form = this.createForm(obj);
            fieldset.appendChild(form);
            fieldset.appendChild(this.createLegend(name, form));
            return fieldset;
        };
        SimpleForm.prototype.createForm = function (obj) {
            var form = this.document.createElement("form");
            for (var prop in obj) {
                form.appendChild(this.createInputContainer(prop, obj));
            }
            form.style.display = "none";
            return form;
        };
        SimpleForm.prototype.createLegend = function (name, form) {
            var legend = this.document.createElement("legend");
            legend.innerText = name;
            legend.addEventListener("click", function () {
                form.style.display =
                    form.style.display !== "none" ? "none" : "inline-block";
            });
            return legend;
        };
        SimpleForm.prototype.createInputContainer = function (prop, obj) {
            var container = this.document.createElement("div");
            if (typeof obj[prop] === "object") {
                container.appendChild(this.createFieldset(prop, obj[prop]));
            }
            else {
                container.appendChild(this.createLabel(prop));
                container.appendChild(this.createInput(prop, obj));
            }
            return container;
        };
        SimpleForm.prototype.createLabel = function (prop) {
            var label = this.document.createElement("label");
            label.setAttribute("for", prop);
            label.innerText = prop;
            return label;
        };
        SimpleForm.prototype.createInput = function (prop, obj) {
            var input = this.document.createElement("input");
            input.name = prop;
            input.value = obj[prop];
            input.onchange = function (evt) {
                obj[prop] = evt.srcElement.value;
            };
            return input;
        };
        return SimpleForm;
    }());
    exports.SimpleForm = SimpleForm;
});
//# sourceMappingURL=simple-form.js.map