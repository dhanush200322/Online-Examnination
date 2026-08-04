import React, { Component } from 'react';
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800 space-y-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto">
              <ExclamationTriangleIcon className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Something went wrong</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                An unexpected application error occurred. Don't worry, your progress and session data are safe.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-left font-mono text-xs text-red-500 overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReload}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <ArrowPathIcon className="w-4 h-4" /> Reload Page
              </button>
              <button
                onClick={this.handleHome}
                className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <HomeIcon className="w-4 h-4" /> Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
