/**
 * Set value to localStorage
 * Automatically stringify if value is an object
 */
function setLocalStorage<T>(key: string, value: T): void {
  try {
    const serialized = typeof value === 'object' ? JSON.stringify(value) : String(value)
    localStorage.setItem(key, serialized)
  } catch (error) {
    console.error(`Error setting localStorage for key "${key}":`, error)
  }
}

/**
 * Get value from localStorage
 * Attempt to parse JSON, fallback to string
 */
function getLocalStorage<T = unknown>(key: string): T | string | null {
  if (typeof window === "undefined") return null;

  const item = localStorage.getItem(key);
  if (item === null) return null;

  try {
    return JSON.parse(item) as T;
  } catch {
    return item;
  }
}

/**
 * Clear all localStorage
 */
function clearLocalStorage(): void {
  localStorage.clear()
}

export { clearLocalStorage, getLocalStorage, setLocalStorage };

