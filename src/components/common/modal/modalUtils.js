import { bodyOverflowProps } from "./modalConsts";

const toggleBodyScrollBar = showModal => {
    const bodyOverflow = showModal ? bodyOverflowProps.hidden : bodyOverflowProps.initial;

    document.body.style.overflow = bodyOverflow;
};

export {
    toggleBodyScrollBar
};