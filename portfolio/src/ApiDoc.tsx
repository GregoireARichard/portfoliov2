import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css'; 

//import openapiSpec from './docs/openapi.yml'


class ApiDocumentation extends Component {
  render() {
    return <SwaggerUI url="http://localhost:8000/openapi" />;
  }
}

export default ApiDocumentation;
