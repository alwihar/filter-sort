import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCheckbox: false,
      ageCheckbox: false
    };
  }

  handleChange = (ev) => {
    const clickedField = ev.target.name;
    const otherField = clickedField === 'nameCheckbox' ? 'ageCheckbox' : 'nameCheckbox';
    this.setState({
      [clickedField]: !this.state[clickedField],
      [otherField]: !this.state[clickedField] && false,
    });
  };

  render() {

    let filterString = '';
    if (this.state.nameCheckbox) filterString = 'BY_NAME';
    if (this.state.ageCheckbox) filterString = 'BY_DOB';

    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter
          handleChange={this.handleChange}
          nameCheckbox={this.state.nameCheckbox}
          ageCheckbox={this.state.ageCheckbox}
        ></Filter>
        <RecordTable filterBy={filterString}/>
      </div>
    );
  }
}

export default App;
