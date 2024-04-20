import { useCallback, useEffect, useState } from "react";

/**
 * 객체 배열을 관리하는 hook
 * - 객체 타입을 사용부에서 정의
 * - 초기 상태를 배열형태로 전달 or fetching 함수를 전달
 */
export const useArray = <T>( initArray: Array<T> | (()=>Promise<Array<T>>) ) => {
  const [array, setArray] = useState<Array<T>>([])

  // 함수인지를 체크하는 타입 가드
  const isFunction = useCallback(
    (initArray: unknown): initArray is () => Promise<Array<T>> => {
      return (typeof initArray !== 'function')
    }, []
  );
  
  /**
   * useArray 파라미터로 fetching 함수가 전달되었을 시,
   * 해당 함수 실행 & 상태 등록
   */
  const initAdapting = useCallback(
    async (getInitArray: () => Promise<Array<T>>) => {
      const response = await getInitArray()
      setArray(response)
    }, []
  )

  useEffect(() => {
    if (isFunction(initArray)) 
      initAdapting(initArray)
    else 
    setArray(initArray)
  }, [initArray, initAdapting,isFunction])

  return {array}
}