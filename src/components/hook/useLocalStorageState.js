import { useState, useEffect } from "react";

/**
 * localStorageで状態を管理するカスタムフック。
 *
 * @param  initialState - 初期状態の値。
 * @param  key - localStorageに状態を保存するためのキー。
 * @returns  - 現在の状態とそれを更新する関数を返します。
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
