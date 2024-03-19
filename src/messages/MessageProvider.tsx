import { useCallback, useState } from "react"
import { MessageContext } from "./utils/context"

type MessageProviderProps = React.PropsWithChildren<Record<never, never>>

function MessageProvider({children}: MessageProviderProps) {
  const [targetOrigin, set] = useState<string>('')

  const setTargetOrigin = useCallback((origin: string) => {
    if (targetOrigin === '') {
      set(origin)
    }
  }, [targetOrigin])

  const resetTargetOrigin = useCallback(() => set(''), [])

  return (
    <MessageContext.Provider value={{targetOrigin, setTargetOrigin, resetTargetOrigin}}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider
