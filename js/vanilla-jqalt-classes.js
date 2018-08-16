/* Classnames */

jqAltCore.prototype.addClass = function(className) {
    this.runAll(function(el) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return this;
};
