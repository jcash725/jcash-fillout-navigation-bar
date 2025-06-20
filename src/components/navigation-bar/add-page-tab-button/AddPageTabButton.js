import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus } from 'lucide-react';
export const AddPageTabButton = ({ onClick }) => {
    return (_jsxs("div", { className: "navigation-bar-item active cursor-pointer ml-5", onClick: onClick, role: "button", children: [_jsx(Plus, { size: 16, className: "text-black" }), "Add page"] }));
};
