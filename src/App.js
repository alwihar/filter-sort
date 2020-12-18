import React from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

const App = () => {
  return (
    <div className="container-fluid">
      <h1 className="main-header">Birthday Records</h1>
      <Filter></Filter>
      <RecordTable/>
    </div>
  );
};

export default App;
