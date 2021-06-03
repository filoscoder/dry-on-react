# Js-React-Utils
![GitHub stars](https://img.shields.io/github/stars/filoscoder/js-react-utils?style=social)
![GitHub forks](https://img.shields.io/github/forks/filoscoder/js-react-utils?style=social)


As the name of the repository, this is a personal & public space to achieve a collection of helper functions.
This is a spontaneous and useful collection of functions that solves little annoying problems for Js & React devs.
<br/><br/>


# DRY (Don't Repeat Yourself)
I'm a freelance Software Engineer, my stack is Javascript & React.
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
```

### URL Query parser (React)
```javascript
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
const location = useLocation();
return useMemo(() => new URLSearchParams(location.search), [location]);
}


/*

# Usage
import { useQuery } from "./utils";


## URL > https://github.com/filoscoder/js-react-utils/new/main?readme=1
const readme = useQuery.get("readme"); // Output > 1

*/
```

# Contribution
There is no structure on this repo, if you want to benefit from this repo give a STAR or FORK it!
Otherwise you want to add your piece, please don't hesitate and send me a PR!
