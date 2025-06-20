import { jsx as _jsx } from "react/jsx-runtime";
export const PageView = ({ activeItem }) => {
    return (_jsx("div", { className: "flex-1 flex pt-10 justify-center text-4xl font-bold bg-gray-50 border-b border-gray-200", children: activeItem ? activeItem.name : 'No page selected' }));
};
