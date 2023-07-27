import { v4 as uuidv4 } from 'uuid';

const useGenerateUUID = (): string => {
  let userId = localStorage.getItem('userId');

  if (!userId) {
    // Only save the first 8 chars of the uuid. Won't exactly have many users so this is fine.
    userId = uuidv4().slice(0, 7);
    localStorage.setItem('userId', userId);
  }

  return userId;
};

export default useGenerateUUID;
