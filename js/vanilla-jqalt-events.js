/* Events */

jqAltCore.prototype.on = function(eventName, arg1, arg2) {
    var fn = function() {},
        sel = '';
    if (typeof arg1 == 'function') {
        fn = arg1;
    }
    if (typeof arg2 == 'function') {
        fn = arg2;
    }
    if (typeof arg1 == 'string') {
        sel = arg1;
    }

    this.runAll(function(el) {
        el.addEventListener(eventName, function(e) {
            if (!sel) {
                fn(e);
            }
            var $children = el.querySelectorAll(sel);
            for (var i = 0, len = $children.length; i < len; i++) {
                if ($children[i] != e.target) {
                    continue;
                }
                fn(e);
                return;
            }
        });

    });
    return this;
};
