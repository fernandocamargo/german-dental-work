import { access } from 'helpers/object';

export default path => object => path.split('.').reduce(access, object);
