import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const MyToast = (props) => {
    return ( 
        <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            {props.header}
          </ToastHeader>
          <ToastBody>
            {props.body}
          </ToastBody>
        </Toast>
      </div>
     );
}
 
export default MyToast;