export default item => ({
  at: collection =>
    collection.includes(item) ? collection : collection.concat(item),
});
