import { createContext } from "react";

const DataContext = createContext();

const buildCustomTheme = theme => {
    const customTheme = {
        ...theme
    };

    return customTheme;
};

export {
    DataContext,
    buildCustomTheme
};