import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>Ошибка: {this.state.errorMessage}</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
