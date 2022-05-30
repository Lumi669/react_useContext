const Input = (props) => {
  console.log("props from Input = ", props);

  return (
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default Input;

//Note: 1. here id should be reassigned as shown in line 7. Only write in Login.js id="email" or id="password" is not enough !!!
//
// Note: 2. here type  is  reassigned, see line 6 and line 7. this way, the browser
//remembers the old input ie after logged out, the input field still has the input email and password.
//However, if take line 6 off, in the browser both input fields emptied. In both cases(has type=... and not has type=...),
//when click logIn button, the localStorage has key-value pair stored, and upon clicking logOut, the
//localStorage key-value pair disapper.  But why without reassignment of type, browser wipe off both input fields???
