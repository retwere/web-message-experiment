import { createContext, useContext } from "react"

export type Notebook = {
  source: MessageEventSource;
  origin: string;
}

export const NotebookContext = createContext<Notebook | null>(null)
export const useNotebook = () => useContext(NotebookContext)

//fooo