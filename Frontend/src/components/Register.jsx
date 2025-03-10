import React from 'react'

const Register = () => {
  return (
    <>
    <dialog id="my_modal_register" className="modal">
    <section
     className="vh-100 bg-image"
     style={{
         backgroundImage: "url(https://cdn5.vectorstock.com/i/1000x1000/09/39/transport-leaving-tunnel-to-metro-train-vector-41780939.jpg)",
     }}
    >
    
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">
                                Create an account
                            </h2>

                            <form>
                                <div className="form-outline mb-4">
                                    <input 
                                      type="text"
                                      id="form3Example1cg"
                                      className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="form3Example1cg">
                                        Your name
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                      type="email"
                                      id="form3Example3cg"
                                      className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="form3Example3cg">
                                        Your email
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                      type="number"
                                      id="form3Example4cg"
                                      className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="form3Example4cg">
                                        Employee id
                                    </label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                    type="submit"
                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
                                    >
                                      Register
                                    </button>
                                </div>
                               
                               <p className="text-center text-muted mt-5 mb-0">
                                 Already have an account?
                                 <a href="/LogIn" className="fw-bold text-body">
                                   <u>Login here</u>
                                 </a>
                               </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </dialog>
    </>
  )
}

export default Register
