function Input({label , id , ...props}) {
  return (
    <>
      <div className=" my-1 mb-2">
        <label htmlFor={id}  className="form-label"> {label} </label>
        <input
        className="form-control"
        id= {id}
        name={id}
        {...props}
        />
        {/* <div className="invalid-feedback">Valid first name is required.</div> */}
      </div>
    </>
  );
}

export default Input;
