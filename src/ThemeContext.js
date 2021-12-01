// Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
import { createContext } from "react";

//create a theme context with a default value(a hook with a function)
const ThemeContext = createContext(["light", () => {}]);

export default ThemeContext;
