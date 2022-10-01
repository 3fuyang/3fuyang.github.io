import { Component, ErrorInfo, ReactNode } from 'react'
import { MdErrorOutline } from 'react-icons/md'

interface EBProps { children?: ReactNode }
interface EBState { hasError: boolean }

export default class ErrorBoundary extends Component<EBProps, EBState> {
  public state: EBState = {
    hasError: false
  }

  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1 flex="~" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <MdErrorOutline className="inline mr-1 ha" />
          Uncaught error.
        </h1>
      )
    }

    return this.props.children
  }
}