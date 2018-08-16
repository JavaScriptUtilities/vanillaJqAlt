/* Core */

function jqAlt(selector, parentSelector) {
    return new jqAltCore(selector, parentSelector);
}

function jqAltCore(selector, parentSelector) {
    var self = this;
    self.el = {};
    if (!parentSelector) {
        parentSelector = document;
    }
    if (typeof selector == 'string') {
        self.el = parentSelector.querySelectorAll(selector);
    }
    else if (typeof selector == 'object' && selector.tagName) {
        self.el = [selector];
    }
    return this;
}

jqAltCore.prototype.runAll = function(fn, args) {
    for (var i = 0, len = this.el.length; i < len; i++) {
        fn(this.el[i], args);
    }
};
