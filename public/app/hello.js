"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_js_1 = require("/app/view/hello.js");
class Hello extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return hello_js_1.default.bind(this)();
    }
    handleChange(ev) {
        let path = ev.target.attributes.model.value;
        let val = ev.target.value;
        _.set(this.state, path, val);
        this.setState(this.state);
    }
    getVal(object, path) {
        return _.get(object, path);
    }
}
exports.default = Hello;
