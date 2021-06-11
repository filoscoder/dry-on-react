<p align="center" width="100%">
  <img src="https://user-images.githubusercontent.com/50701501/121663369-a5349280-caa6-11eb-905a-b32f19afc276.png" />
</p>

<p align="center" width="100%">
  <img src="https://img.shields.io/github/stars/filoscoder/js-react-dry?style=social" />
  <img src="https://img.shields.io/github/forks/filoscoder/js-react-dry?style=social" />
</p>
<p align="center" width="100%">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ffiloscoder%2Fjs-react-dry&count_bg=%23007FEF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</p>

As the name of the repository, this is a personal & public space to achieve a collection of helper functions.
This is a spontaneous and useful collection of functions that solves concurrently annoying problems for Js & React devs.
<br/><br/>

# DRY (Don't Repeat Yourself)

I'm a freelance Software Engineer, my stack is Typescript & React.
After some time working on different projects, I found myself facing the same problems and solving them with the same pattern.
This is a repository for saving valuable time and stay as DRY as possible while working.
<br/><br/>

# Examples

### Phone number formatter (Js)

```javascript
// Parameter> $inputValue: string
// Output> "xxx-xxxx-xxxx"
export const phoneMask = (inputValue = "") =>
  inputValue
    .replace(/\D/g, "")
    .replace(/(\d{1,3})(\d{1,4})?(\d{1,4})?/g, function (_, a, b, c) {
      return c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : `${a}`;
    });

/*

# Usage
import { phoneMask } from "./dry";

.
.
.

<input type="tel" value={phoneMask(userPhone)} />
// Input > "01022223333"
// Output > "010-2222-3333"

*/
```

### useInputs (React - Custom hook)

```typescript
import React, { useCallback, useReducer } from "react";

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
      initialState[key] = "";
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
    []
  );
  const onReset = useCallback(() => {
    dispatch(null);
  }, []);

  return [state, dispatch, onChange, onReset] as [
    T,
    typeof dispatch,
    typeof onChange,
    typeof onReset
  ];
}

/*

# Usage
import { useInputs } from "./dry";

.
.
.
// React component
const [form, onChange] = useInputs<MyFormType>({
    email: '',
    password: '',
});
.
.
.
// Render => Form JSX
<form>
  <input 
    type="email"
    name="email"
    value={form.email}
    onChange={onChange}
  />
  <input
    type="password"
    name="password"
    value={form.password}
    onChange={onChange}
  />
</form>

*/
```

# Contribution

There is no structure on this repo, if you want to benefit from this repo give a `STAR` or `FORK` it!
Otherwise, if you want to add your piece, please don't hesitate and send me a PR!

