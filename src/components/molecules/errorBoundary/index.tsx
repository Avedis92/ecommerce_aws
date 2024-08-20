import React, { ReactNode } from "react";
import ErrorComponent from "../errorComponent";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
