import React, { createContext, useContext, useState } from 'react';

type NotificationContextType = {
  unreadPromotions: number;
  setUnreadPromotions: React.Dispatch<React.SetStateAction<number>>;
};

const NotificationContext = createContext<NotificationContextType>({
  unreadPromotions: 0,
  setUnreadPromotions: () => {},
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unreadPromotions, setUnreadPromotions] = useState(0);

  return (
    <NotificationContext.Provider value={{ unreadPromotions, setUnreadPromotions }}>
      {children}
    </NotificationContext.Provider>
  );
};
