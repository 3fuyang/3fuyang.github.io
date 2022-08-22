import { Component, ErrorInfo, ReactNode } from 'react'
import { MdErrorOutline } from 'react-icons/md'

type EBProps = { children?: ReactNode }
type EBState = { hasError: boolean }

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
        <h1>
          <MdErrorOutline className="w-6 ha" />
          Uncaught error.
        </h1>
      )
    }

    return this.props.children
  }
}