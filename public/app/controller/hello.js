import StateChangeMixin from '../../js/state-change-mixin.js';
import view from '../../app/view/hello.js';

class Hello extends React.Component {

	constructor() {
		super();
		this.state = {
			header1: {
				text: {
					val: 'hi'
				}
			},
			header2: true,
			header3: '2019-08-02',
			header6: '00:00:00',
			header4: 5,
			header5: 'borderColor'
		};
	}

	render() {
		return view.bind(this)();
	}

}

Object.assign(Hello.prototype, StateChangeMixin);

export default Hello;
