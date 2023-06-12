import React, { Suspense, type ErrorInfo, type ReactNode } from "react";
import PageError from "widgets/PageError/ui/PageError";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}


// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line handle-callback-err, n/handle-callback-err
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        //eslint(i18next/no-literal-string)
        if (hasError) {
            return (
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            )
        }

        return children;
    }
}

export default ErrorBoundary;