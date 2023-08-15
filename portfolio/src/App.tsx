import React from 'react';
import Menu from './Menu';

interface AppProps {
  // Define your OpenAPI spec type here
  openapiSpec: any;
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1>My App</h1>
      <Menu/>
    </div>
  );
};

export default App;