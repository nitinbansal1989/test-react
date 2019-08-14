var StateChangeMixin = {

  handleChange(ev) {
    let element = ev.target;

    let tagname = element.tagName;
    let path = element.name;

    if (!path) {
      return;
    }

    let val = null;
    if (tagname === 'INPUT') {
      let type = element.type;
      switch (type) {
        case 'number': {
          val = element.valueAsNumber;
          break;
        }
        case 'checkbox': {
          val = element.checked;
          break;
        }
        default: {
          val = element.value;
        }
      }
    } else {
      val = element.value;
    }

    _.set(this.state, path, val);
    this.setState(this.state);
  },

  viewBool(val) {
    return val ? 'true' : 'false';
  }

}

export default StateChangeMixin;
