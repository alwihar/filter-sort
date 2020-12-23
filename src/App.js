import React, {useState} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

const people = [
    {
        name: 'Veronica Mize',
        dob: '11/29/2011'
    }, {
        name: 'Cecilia Olsson',
        dob: '09/16/1992'
    }, {
        name: 'Peter Parker',
        dob: '01/16/1992'
    }, {
        name: 'Jimmy Shergil',
        dob: '12/12/2001'
    }, {
        name: 'Alexander Alfred',
        dob: '02/09/1891'
    }, {
        name: 'Janice Shroyer',
        dob: '12/01/1982'
    }, {
        name: 'Ralph White',
        dob: '11/30/2011'
    }, {
        name: 'Deborah T. Decker',
        dob: '10/31/1999'
    }
];

const compareNames = ( a, b ) => {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
};

const compareDobs = (a, b) => {
    return new Date(a.dob) - new Date(b.dob);
};

const App = () => {

    const [checked, setChecked] = useState('');

    const handleChecked = (numberOfCheckbox, valueOfPeople) => {
        checked === numberOfCheckbox ? setChecked('') : setChecked(numberOfCheckbox);
        switch (valueOfPeople) {
            case 'name':
                people.sort(compareNames);
                break;
            case 'dob':
                people.sort(compareDobs);
                break;
        }
    };

    return (
        <div className="container-fluid">
          <h1 className="main-header">Birthday Records</h1>
          <Filter state={checked} onChange={handleChecked}/>
          <RecordTable people={people}/>
        </div>
    )
};

export default App;
