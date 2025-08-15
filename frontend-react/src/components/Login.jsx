import React, {} from 'react'

const Login = () => {
  
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark rounded p-5 mt-5">
                <h3 className="text-light text-center mt-5">
                    Login to your account
                </h3>
                <form action="">
                    <input type="text" className='form-control mb-3' placeholder='Enter username' name="" id="" />
                    <input type="password" className='form-control mb-3' placeholder='Enter password' name="" id="" />
                    <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
