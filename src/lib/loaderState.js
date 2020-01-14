import { useState } from 'react';
export const loaderState = {}

export function useLoaderState(id) {
    const [isLoading, setLoading] = useState(true);
    loaderState[id] = setLoading;
    return isLoading;
}