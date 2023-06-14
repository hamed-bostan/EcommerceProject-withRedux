export const validate = (info, type) => {
  const errors = {};

  if (!info.email) {
    errors.email = "email is requierd";
  } else if (!/\S+@\S+\.\S+/.test(info.email)) {
    errors.email = "email is not correct";
  } else {
    delete errors.email;
  }

  if (!info.password) {
    errors.password = "password is requierd";
  } else if (info.password.length < 6) {
    errors.password = "password has to be more than 6 character";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!info.name) {
      errors.name = "name is not valid";
    } else {
      delete errors.name;
    }

    if (!info.confirmPassword) {
      errors.confirmPassword = "confirm password is requierd";
    } else if (info.confirmPassword !== info.password) {
      errors.password = "password didnt match";
    } else {
      delete errors.confirmPassword;
    }

    if (info.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our terms and regulations";
    }
  }

  return errors;
};
