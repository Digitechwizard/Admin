import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import DatePicker from 'react-datepicker'; // Importing date picker
import 'react-datepicker/dist/react-datepicker.css'; // Importing date picker CSS
import 'assets/scss/mainStyle.css';

const AccountStatement = () => {
  const statementDataPage1 = [
    {
      date: '29 May 24',
      description: 'Chips withdrawl from Sumitjj',
      prevBalance: 100000,
      credit: 0,
      debit: 99500,
      commission: 0,
      balance: 500
    },
    {
      date: '30 May 24',
      description: 'Deposit from Company XYZ',
      prevBalance: 500,
      credit: 1000,
      debit: 0,
      commission: 0,
      balance: 1500
    },
  ];

  const statementDataPage2 = [
    {
      date: '31 May 24',
      description: 'Withdrawal for Rent Payment',
      prevBalance: 1500,
      credit: 0,
      debit: 1000,
      commission: 0,
      balance: 500
    },
    {
      date: '1 June 24',
      description: 'Salary Deposit',
      prevBalance: 500,
      credit: 5000,
      debit: 0,
      commission: 0,
      balance: 5500
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageData = currentPage === 1 ? statementDataPage1 : statementDataPage2;

  return (
    <div className="container mt-0">
      {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6> Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>
      <h1 className="text-left title_h1">Sport Details</h1>

      {/* Create and Update Buttons on the Right */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="form-control mr-2"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="form-control"
          />
        </div>
        <div className="ml-2">
          <Link to="#" className="btn btn-primary" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616', marginLeft: '10px' }}>Cricket</Link>
          <Link to="#" className="btn btn-success ml-2" style={{ backgroundColor: '#28a745', borderColor: '#28a745', marginLeft: '10px' }}>More Event</Link>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="card bg-default shadow">
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" style={{ marginLeft: '10px' }}>DATE</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">Prev. Bal</th>
                    <th scope="col">CREDIT</th>
                    <th scope="col">DEBIT</th>
                    <th scope="col">Comm+</th>
                    <th scope="col">BALANCE</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.date}</td>
                      <td>{data.description}</td>
                      <td>{data.prevBalance}</td>
                      <td>{data.credit}</td>
                      <td>{data.debit}</td>
                      <td>{data.commission}</td>
                      <td>{data.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer py-3">
              <nav aria-label="...">
                <ul className="pagination justify-content-center mb-0">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)} tabIndex="-1">
                      <GrFormPrevious />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(1)}>
                      1
                    </a>
                  </li>
                  <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(2)}>
                      2
                    </a>
                  </li>
                  <li className={`page-item ${currentPage === 2 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
                      <MdNavigateNext />
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/demos/admin-templates/materially/react/free/" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
