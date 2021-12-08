export default function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    throw new Error("Please enter a string that not longer than 10 characters.")
  } else {
    return str.length;
  }
};