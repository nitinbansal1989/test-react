import view from '/app/view/hello.js';

export default class Hello extends React.Component {

	constructor() {
		super();
		this.state = {};
		this.model = {};
	}

	render() {
		return view.bind(this)();
	}

	handleChange(ev) {
		let element = ev.target;
		let path = element.attributes.model.value;
		let type = element.type;

		let val = null;
		switch (type) {
			case 'number':
			case 'datetime':
			case 'date':
			case 'time': {
				val = element.valueAsNumber;
				break;
			};
			case 'checkbox': {
				val = element.checked;
				break;
			};
			default: {
				val = element.value;
			}
		}

		_.set(this.model, path, val);
		this.setState(this.model);
	}

	getVal(object, path) {
		return _.get(object, path);
	}

}
