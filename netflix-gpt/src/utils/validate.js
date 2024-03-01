export const checkValidData = (email, password, fullName) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isValidFullName =
  //   /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
  //     fullName
  //   );

  // if (!isValidFullName) return "Full Name is not valid";
  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
