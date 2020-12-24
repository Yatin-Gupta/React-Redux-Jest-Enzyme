import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <Header />
      <main>
        <Headline headline={'Unit Testing App'} description={'Using JEST and Enzyme'} tempAr={[{
          name:'Penny',
          city:'New York',
          isOnline:false
        }]} />
        <Posts />
      </main>
    </div>
  );
}

export default App;
