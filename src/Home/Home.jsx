import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

//   console.warn(showPassword);

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="colo-3">
          <div className="input-group mb-3 shadow border rounded">
            <input
              className="form-control bg-dark text-light"
              type={showPassword ? "text" : "password"}
            />

            <button
              className="input-group-text bg-dark text-light"
              onClick={() => setShowPassword(!showPassword)}
             
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}hjghjghj
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
