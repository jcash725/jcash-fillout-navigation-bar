import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ContextMenuItem = ({ iconRenderer, itemName }) => {
    return (_jsxs("div", { className: "item-container", children: [_jsx("span", { className: "icon", children: iconRenderer }), _jsx("div", { className: "name", children: itemName })] }));
};
