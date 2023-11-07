/** @format */

import React from "react";

function UserDeatils({ data }) {
  const {
    company,
    role,
    logo,
    location,
    level,
    position,
    contract,
    postedAt,
    featured,
    languages,
    tools,
  } = data;
 

  return (
    <div key={data.id} className='p-3'>
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className='des'>
        <div>
          <div>
            <h2>{company}</h2>
            <h2></h2>
            <h2></h2>
          </div>
        </div>
        <div>
          <h2>{position}</h2>
        </div>
        <div>
          <h4>{postedAt}</h4>
          <h4>{contract}</h4>
          <h4></h4>
        </div>
      </div>
      <div className='job-roles'></div>
    </div>
  );
}

export default UserDeatils;
