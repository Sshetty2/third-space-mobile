/* eslint-disable class-methods-use-this */
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// mixin to enable storage on web
export class Storage {
  getItem (key: string) {
    if (Platform.OS === 'web') {
      if (typeof localStorage === 'undefined') {
        return null;
      }

      return localStorage.getItem(key);
    }

    return AsyncStorage.getItem(key);
  }

  removeItem (key: string) {
    if (Platform.OS === 'web') {
      return localStorage.removeItem(key);
    }

    return AsyncStorage.removeItem(key);
  }

  setItem (key: string, value: string) {
    if (Platform.OS === 'web') {
      return localStorage.setItem(key, value);
    }

    return AsyncStorage.setItem(key, value);
  }
}

export const storage = new Storage();
