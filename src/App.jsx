import React from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

const App = () => {
  return (
    <div>
      <Child1 title="this is child 1" />
      <Child2 title="this is child 2" />
    </div>
  );
};
export default App;
