import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import 'assets/scss/mainStyle.css';

const AccountStatement = () => {
  // Example data array for two pages (you can replace this with your actual data or fetch from API)
  const statementDataPage1 = [
    {
      code: '00',
      otp: '387843',
      cretedon: 500
    },
    {
      code: '01',
      otp: '734973',
      cretedon: 500
    },
  ];

  const statementDataPage2 = [
    {
      code: '03',
      otp: '784373',
      cretedon: 500
    },
    {
      code: '04',
      otp: '8434654',
      cretedon: 500
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Determine which page data to render based on currentPage
  const pageData = currentPage === 1 ? statementDataPage1 : statementDataPage2;

  return (
    <div className="container mt-0">
      {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6> Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>
      
      <h1 className="text-left title_h1">Secure Code Report</h1>
      
      {/* Form label */}
      <label htmlFor="secureCodeInput" className="mt-3">Enter your secure code:</label>
      
      {/* Input and Button in flexbox */}
      <div className="input-group mb-4"> {/* Added mb-4 for extra margin */}
        <input type="number" className="form-control" id="secureCodeInput" placeholder="Secure Code" aria-label="Secure Code" style={{ maxWidth: '300px'}} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Show</button>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col">
          <div className="card bg-default shadow">
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">OTP</th>
                    <th scope="col">Created On</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.code}</td>
                      <td>{data.otp}</td>
                      <td>{data.cretedon}</td>
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
      
      {/* Back to Main Menu button */}
      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/demos/admin-templates/materially/react/free/" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
