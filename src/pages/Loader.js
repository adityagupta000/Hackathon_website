import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loader() {
  return (
    <div className="loader-overlay d-flex justify-content-center align-items-center">
      <div className="loader"></div>
      <style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999; /* Ensure the loader is on top */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loader, .loader::before, .loader::after {
          border-width: 2px;
          border-style: solid;
          border-radius: 10px;
          animation: rotate 5s linear infinite;
        }
        .loader {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 80px;
          height: 80px;
          border-color: #5a4ff3;
        }
        .loader::before, .loader::after {
          position: absolute;
          content: "";
        }
        .loader::before {
          border-color: #35a2d2;
          width: 110%;
          height: 110%;
          animation-delay: .5s;
        }
        .loader::after {
          border-color: #9c40fc;
          width: 120%;
          height: 120%;
          animation-delay: .10s;
        }
        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
