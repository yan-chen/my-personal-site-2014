/**
 * Created by yanc21 on 7/31/14.
 */

'use strict';

Array.prototype.remove = function (value) {
    if (this.indexOf(value) !== -1) {
        this.splice(this.indexOf(value), 1);
        return true;
    } else {
        return false;
    }
};