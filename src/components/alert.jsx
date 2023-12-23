import React from 'react'
const alert = ({ type, text }) => {
    return (
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        } p-2 text-white leading-none rounded-lg flex lg:inline-flex items-center`} role="alert">
          <span className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          } flex rounded-full uppercase px-2 py-1 font-bold mr-3 text-xs`}>
            {type === 'danger' ? 'Failed' : 'Success'}
          </span>
          <span className="mr-2 text-left flex-shrink">{text}</span>
        </div>
      </div>
    );
  };
  
  export default alert;
  