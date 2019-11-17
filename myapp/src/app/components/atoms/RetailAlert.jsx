import React from 'react';
import { Alert } from 'reactstrap';

const RetailAlert = (props) => {
    return ( 
        <Alert color={props.type} {...props}>
         {props.body}
      </Alert>
     );
}
 
export default RetailAlert;