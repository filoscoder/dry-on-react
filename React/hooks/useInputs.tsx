import React, { useCallback, useReducer } from 'react';

type DefaultValues = {
    [key: string]: string;
};
type UseInputsAction = {
    name: string;
    value: string;
};

function reducer<T>(state: T, action: UseInputsAction | null) {
    if (!action) {
        const initialState: any = {};
        Object.keys(state).forEach((key) => {
            initialState[key] = '';
        });

        return initialState;
    }

    return {
        ...state,
        [action.name]: action.value,
    };
}

export default function useInputs<T>(defaultValues: DefaultValues) {
    const [state, dispatch] = useReducer(reducer, defaultValues);
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            dispatch({
                name: e.target.name,
                value: e.target.value,
            });
        },
        [],
    );
    const onReset = useCallback(() => {
        dispatch(null);
    }, []);

    return [state, dispatch, onChange, onReset] as [
        T,
        typeof dispatch,
        typeof onChange,
        typeof onReset,
    ];
}
