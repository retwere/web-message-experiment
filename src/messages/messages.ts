import { useCallback, useContext, useEffect } from "react"
import { MessageContext } from "./utils/context"

export const useListenForAck = () => {
  const {setTargetOrigin} = useContext(MessageContext)

  const listenForAck = useCallback(({origin, data}: MessageEvent) => {
    if (!origin.startsWith('https://') || !origin.endsWith('-colab.googleusercontent.com')) {
      return
    }
    if (data.action === 'ack') {
      setTargetOrigin(origin)
    }
  }, [setTargetOrigin])

  useEffect(() => {
    window.addEventListener("message", listenForAck)
    // return () => window.removeEventListener("message", listenForAck)
  }, [listenForAck])
}

export const useListenForDone = (callback: () => void) => {
  const {targetOrigin} = useContext(MessageContext)

  const listenForDone = useCallback(({origin, data}: MessageEvent) => {
    if (origin !== targetOrigin) {
      return
    }
    if (data.action === 'done') {
      callback()
    }
  }, [callback, targetOrigin])

  useEffect(() => {
    window.addEventListener("message", listenForDone)
    // return () => window.removeEventListener("message", listenForDone)
  }, [listenForDone])
}

export const useReadyMessage = () => {
  const {resetTargetOrigin} = useContext(MessageContext)

  useEffect(() => resetTargetOrigin(), [resetTargetOrigin])

  useListenForAck()

  return useCallback(() => window.parent.postMessage({action: 'ready'}, {targetOrigin: '*'}), [])
}

export const useResizeMessage = () => {
  const {targetOrigin} = useContext(MessageContext)
  return useCallback((size: {width: string, height: string}) => {
    if (targetOrigin !== '') {
      window.parent.postMessage({action: 'resize', ...size}, {targetOrigin})
    }
  }, [targetOrigin])
}

export const useApiKeyMessage = (callback: () => void) => {
  const {targetOrigin} = useContext(MessageContext)

  useListenForDone(callback)

  return useCallback((value: string) => {
    if (targetOrigin !== '') {
      window.parent.postMessage({action: 'api_key', value}, {targetOrigin})
    }
  }, [targetOrigin])
}

export const useCancelMessage = () => {
  const {targetOrigin} = useContext(MessageContext)
  return useCallback(() => {
    if (targetOrigin !== '') {
      window.parent.postMessage({action: 'cancel'}, {targetOrigin})
    }
  }, [targetOrigin])
}
