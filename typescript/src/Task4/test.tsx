import { Dispatch, FC, PropsWithChildren, PropsWithRef, forwardRef, useRef, useState } from "react"




export const Greet: Dispatch  ({ children }) => {
  const [state,setState] = useState<number>(0)
  console.log(test)
  return <div>{children}</div>
}
