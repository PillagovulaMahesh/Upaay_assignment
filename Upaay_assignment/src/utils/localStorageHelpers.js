// Save state (or any object) to localStorage
export const saveToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
};

// Load state (or any object) from localStorage
export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return defaultValue;
    return JSON.parse(serializedValue);
  } catch (err) {
    console.error("Error loading from localStorage:", err);
    return defaultValue;
  }
};

// Remove a specific key
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from localStorage:", err);
  }
};

// Clear all localStorage (⚠️ use carefully)
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Error clearing localStorage:", err);
  }
};
