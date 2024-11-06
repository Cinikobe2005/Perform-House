import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
        <h1>
            opperror404
        </h1>
        <button>
            <Link to="/">Back to homepage</Link>
        </button>
    </div>
  )
}

export default ErrorPage