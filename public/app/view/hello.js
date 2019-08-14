export default function () {
    return React.createElement('div', {}, React.createElement('h2', {}, 'Hello world, how is it working?'), React.createElement('div', {}, this.state.header1.text.val), React.createElement('div', {}, this.state.header4), React.createElement('div', {}, this.viewBool(this.state.header2)), React.createElement('div', {}, this.state.header3), React.createElement('div', {}, this.state.header6), React.createElement('div', {}, this.state.header5), React.createElement('input', {
        'type': 'text',
        'name': 'header1.text.val',
        'onChange': this.handleChange.bind(this),
        'value': this.state.header1.text.val
    }), React.createElement('input', {
        'type': 'number',
        'name': 'header4',
        'onChange': this.handleChange.bind(this),
        'value': this.state.header4
    }), React.createElement('input', {
        'type': 'checkbox',
        'name': 'header2',
        'onChange': this.handleChange.bind(this),
        'checked': this.state.header2
    }), React.createElement('input', {
        'type': 'date',
        'name': 'header3',
        'onChange': this.handleChange.bind(this),
        'value': this.state.header3
    }), React.createElement('input', {
        'type': 'time',
        'name': 'header6',
        'onChange': this.handleChange.bind(this),
        'value': this.state.header6
    }), React.createElement('select', {
        'onChange': this.handleChange.bind(this),
        'name': 'header5',
        'value': this.state.header5
    }, React.createElement('option', { 'value': true }, 'SELECT'), React.createElement('option', { 'value': 'color' }, 'Color'), React.createElement('option', { 'value': 'backgroundColor' }, 'Background color'), React.createElement('option', { 'value': 'borderColor' }, 'Border color')));
}