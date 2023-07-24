export const isURL = (input) => {
  const httpPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
  return httpPattern.test(input);
};
