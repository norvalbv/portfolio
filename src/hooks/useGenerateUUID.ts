'use client';

import { v4 as uuid4 } from 'uuid';
import { useEffect, useState } from 'react';

const useGenerateUUID = (): string => {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');

    if (!storedUserId) {
      // Only save the first 8 chars of the uuid. Won't exactly have many users so this is fine.
      storedUserId = uuid4().slice(0, 7);
      localStorage.setItem('userId', storedUserId);
    }

    setUserId(storedUserId);
  }, []);

  return userId;
};

export default useGenerateUUID;
