import React, { useRef } from 'react';
// import ReactToPrint, { useReactToPrint } from 'react-to-print';
import withAuth from '../../auth/withAuth';
import Form from '../registrationForm';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';

class Example extends React.PureComponent {
  render() {
    return (
      <div className='pb-28'>
        <Form ref={el => (this.componentRef = el)} />
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    );
  }
}

export default withAuth(Example)