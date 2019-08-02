export default function () {
    return React.createElement('div', {}, React.createElement('h2', {}, 'Hello world, it is working?'), React.createElement('div', {}, this.state.header), React.createElement('input', {
        'type': 'text',
        'model': 'header',
        'onChange': this.handleChange.bind(this)
    }), React.createElement('input', {
        'type': 'number',
        'model': 'header',
        'onChange': this.handleChange.bind(this)
    }), React.createElement('input', {
        'type': 'checkbox',
        'model': 'header',
        'onChange': this.handleChange.bind(this)
    }), React.createElement('input', {
        'type': 'date',
        'model': 'header',
        'onChange': this.handleChange.bind(this)
    }), React.createElement('input', {
        'type': 'time',
        'model': 'header',
        'onChange': this.handleChange.bind(this)
    }));
}