import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from '../store/_reducers/auth';
import { getPendingTasks, getVerificationTasks, setPendingTasks, setVerificationTasks } from '../store/_reducers/task';
import NetInfo from '@react-native-community/netinfo';

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  
  const auth = useSelector(getAuth);
  const pendingTasks = useSelector(getPendingTasks);
  const verificationTasks = useSelector(getVerificationTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Initial network check
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const fetchTasks = async () => {
    if (!isConnected) {
      console.log('No internet connection');
      return;
    }
    console.log('internet connected');
    try {
      const response = await authService.getAllTask();
      const pending = response.data.data.filter(task => 
        task.status === 'Pending' && task.verifierNameOrId === auth.user.fieldExcutiveId
      );
      const verification = response.data.data.filter(task => 
        task.status === 'Draft' && task.verifierNameOrId === auth.user.fieldExcutiveId
      );
      dispatch(setPendingTasks(pending));
      dispatch(setVerificationTasks(verification));
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const value = {
    fetchTasks,
    pendingTasks,
    verificationTasks,
    isConnected
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
