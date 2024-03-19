import { createContext } from "react"

type MessageContextType = {
  targetOrigin: string
  setTargetOrigin: (origin: string) => void
  resetTargetOrigin: () => void
}

export const MessageContext = createContext<MessageContextType>({
  targetOrigin: '',
  setTargetOrigin: () => {},
  resetTargetOrigin: () => {}
})
