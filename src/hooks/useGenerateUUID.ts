import { v4 as uuidv4 } from 'uuid';

const useGenerateUUID = (): string => {
  let userUUID = localStorage.getItem('userUUID');

  if (!userUUID) {
    userUUID = uuidv4();
    localStorage.setItem('userUUID', userUUID);
  }

  return userUUID;
};

export default useGenerateUUID;
