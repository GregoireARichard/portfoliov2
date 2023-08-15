import React from 'react';
import Menu from './Menu';
import 'swagger-ui-react/swagger-ui.css'; 

interface AppProps {
  // Define your OpenAPI spec type here
  openapiSpec: any;
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Menu/>
      
    </div>
  );
};

export default App;