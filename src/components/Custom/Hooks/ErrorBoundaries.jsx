import React, { useState, useEffect, Children } from 'react'
import Button from '../../Button';

export default function ErrorBoundaries(
    { hasError = false,
        handleError,
        message = "Something went Wrong ",
        children }
) {
    const [error, setError] = useState(hasError);
    useEffect(() => {
        setError(hasError);

    }, [hasError]);

    if (error) {
        return <div className="alert alert-danger">
            <p className="mr-1">{message}</p>
            <Button text={"Try Again"} onClick={handleError} />
        </div>
    }
    return children;

    
}
