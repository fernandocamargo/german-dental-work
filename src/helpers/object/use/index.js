export default path => object =>
  path.split('.').reduce((stack, fragment) => stack[fragment], object);
