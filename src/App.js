import './App.css';
import QuoteCard from './components/QuoteCard';
import React from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState(null);

  const getData = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((results) => setUsers(results[0]));
  };

  const getRandomQuotes = () => {
    console.log('click');
    getData();
  };

  React.useEffect(() => {
    console.log('data');
    getData();
  }, []);

  return (
    <div className="App">
      <button onClick={getRandomQuotes}>Get New Simpsons Quotes</button>
      {users ? <QuoteCard users={users} /> : <p>Waiting for Data</p>}
    </div>
  );
}

export default App;
