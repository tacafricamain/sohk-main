import React, { useRef } from 'react';
import withAuth from '../../auth/withAuth';
import RegistrationForm from '../registrationForm';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class Example extends React.PureComponent {
  render() {
    return (
      <div className='pb-28'>
        <RegistrationForm ref={el => (this.componentRef = el)} />
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
