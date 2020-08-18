import React from 'react';

function App({value, onIncrementAsync}) {
  return (
    <div>
      <button onClick={onIncrementAsync}>Counter++</button>
      <span>Counter: {value}</span>
    </div>
  );
}


export default App;
