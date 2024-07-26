import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start" style={{ backgroundColor: 'black', color: 'white', width: '100%' }}>
      <div className='space'></div>
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About department</h5>
            <p>
            The University of Kelaniya's Department of Statistics & Computer Science, 
            established in 1999, meets education demands in these fields. 
            We offer B.Sc. (General) programs with 75 and 125 annual intakes respectively, 
            along with B.Sc. Honours programs in Statistics, Computer Science, and Computer Studies.
            </p>
            <div className="mt-4">
            <a href="https://www.facebook.com/stcskln/?ref=bookmarks" className="btn btn-floating btn-dark btn-lg"><i className="fab fa-facebook-f"></i></a>
            <a href="https://science.kln.ac.lk/depts/stcs/" className="btn btn-floating btn-dark btn-lg"><i className="fab fa-dribbble"></i></a>
            <a href="https://twitter.com/" className="btn btn-floating btn-dark btn-lg"><i className="fab fa-twitter"></i></a>
            <a href="https://plus.google.com/" className="btn btn-floating btn-dark btn-lg"><i className="fab fa-google-plus-g"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
            <div className="form-outline form-white mb-4">
              <input type="text" id="formControlLg" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="formControlLg">Search</label>
            </div>
            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Dalugama, Kelaniya, Sri Lanka.</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">dscs@kln.ac.lk</span>
              </li>
              <li className="mb-3">
                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+94 11 2903371</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <table className="table text-center text-white">
              <tbody className="fw-normal">
                <tr>
                  <td>Mon - Fri:</td>
                  <td>8am - 4pm</td>
                </tr>
                <tr>
                  <td>Sat - Sun:</td>
                  <td>8am - 12pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: Department of Statistics & Computer Science, Faculty of Science, University of Kelaniya, Sri Lanka.
      </div>
    </footer>
  );
}

export default Footer;
