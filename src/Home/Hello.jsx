import React, { useState } from 'react'

import { Visibility } from '@mui/icons-material';

import Button from '@mui/material/Button';
const Hello = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
           <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="input-group mb-3 shadow border rounded">
            <input
              className="form-control bg-dark text-light"
              type={showPassword ? "text" : "password"}
            />

            <button
              className="input-group-text bg-dark text-light"
              onClick={() => setShowPassword(!showPassword)}
             
            >
              {showPassword ?  "hide":"show" }
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hello