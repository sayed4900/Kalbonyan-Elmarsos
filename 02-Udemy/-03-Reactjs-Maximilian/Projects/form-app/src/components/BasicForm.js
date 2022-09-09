import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // First name
  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueInputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim() !== "");
  const fNameClass = fNameHasError ? "form-control invalid" : "form-control";
  ////////

  // Last name
  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueInputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim() !== "");
  const lNameClass = lNameHasError ? "form-control invalid" : "form-control";

  ///

  //E-mail
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueInputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const emailClass = lNameHasError ? "form-control invalid" : "form-control";

  //
  const formSubmisson = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log("Sumbitted");
    fNameReset();
    lNameReset();
    emailReset();
  };
  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) formIsValid = true;

  return (
    <form onSubmit={formSubmisson}>
      <div className="control-group">
        <div className={fNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fName}
          />
          {fNameHasError && (
            <p className="error-text">First Name is not valid</p>
          )}
        </div>
        <div className={lNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lName}
          />
          {lNameHasError && (
            <p className="error-text">Last Name is not valid</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
