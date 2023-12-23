import React from 'react';
import { Link } from "react-router-dom";

const cta = () => {
  return (
    <section className="cta flex items-center justify-between"> {/* Added flexbox styling */}
        <p className="cta-text mt-[-30px]">
            Let's get in touch!
            <br className="sm:block hidden" />
            <br></br>
            Eager to explore joint opportunities!
        </p>
        <Link to="/contact" className="btn">
            Contact  
        </Link>
    </section>
  );
};

export default cta;
