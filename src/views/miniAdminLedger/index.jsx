import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import DatePicker from 'react-datepicker'; // Importing date picker
import 'react-datepicker/dist/react-datepicker.css'; // Importing date picker CSS
import 'assets/scss/mainStyle.css';

const AccountStatement = () => {
  return (
    <div className="container mt-0">
      {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6> Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="text-left title_h1">Mini Admin Ledger</h1>
        <a href="/demos/admin-templates/materially/react/free" className="btn btn-primary">Back</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ margin: '5px', backgroundColor: '#f5f5f5', padding: '0px', borderRadius: '5px' }}>
          <h3  style={{ backgroundColor: 'green', color: '#fff', padding: '1px 5px', borderRadius: '3px', marginBottom: '10px' }}>Lena 0.00</h3>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '300px' }}>
            <thead>
              <tr style={{ border: '1px solid black', backgroundColor: 'green' }}>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>User Details</th>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>John</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>0</td>
              </tr>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>John</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ margin: '5px', backgroundColor: '#f5f5f5', padding: '0px', borderRadius: '5px' }}>
          <h3 style={{ backgroundColor: 'red', color: '#fff', padding: '1px 5px', borderRadius: '3px', marginBottom: '10px' }}>Dena 0.00</h3>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '300px' }}>
            <thead>
              <tr style={{ border: '1px solid black', backgroundColor: 'red' }}>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>User Details</th>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>John</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>25</td>
              </tr>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>Jane</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>30</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ margin: '5px', backgroundColor: '#f5f5f5', padding: '0px', borderRadius: '5px' }}>
          <h3 style={{ backgroundColor: 'green', color: '#fff', padding: '1px 5px', borderRadius: '3px', marginBottom: '10px' }}>Clear</h3>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '300px' }}>
            <thead>
              <tr style={{ border: '1px solid black', backgroundColor: 'green' }}>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>User Details</th>
                <th style={{ border: '1px solid black', padding: '8px', color: '#fff' }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>John</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>331 million</td>
              </tr>
              <tr style={{ border: '1px solid black' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>John</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>1.4 billion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AccountStatement;
