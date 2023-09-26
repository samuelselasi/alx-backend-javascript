import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((values) => {
    const array = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        array.push({ status: val.status, value: val.value });
      } else {
        array.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return array;
  });
}
