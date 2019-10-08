import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string()
    .email('Invalid email')
    .required('Required field'),
});
