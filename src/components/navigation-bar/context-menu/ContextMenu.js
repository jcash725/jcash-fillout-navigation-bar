import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy, Flag, Pencil, Clipboard, Trash2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ContextMenuItem } from "src/components/navigation-bar/context-menu/context-menu-item/ContextMenuItem";
export const ContextMenu = ({ open, onClose, }) => {
    const menuRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open, onClose]);
    if (!open)
        return null;
    return (_jsxs("div", { ref: menuRef, className: "context-menu-container absolute bottom-full left-0 mb-2", children: [_jsx("div", { className: "title font-melody", children: "Settings" }), _jsxs("div", { className: "sub-context-menu-container", children: [_jsx(ContextMenuItem, { iconRenderer: _jsx(Flag, { size: 16, fill: "currentColor", className: "text-[var(--color-blue-100)]" }), itemName: "Set as first page" }), _jsx(ContextMenuItem, { iconRenderer: _jsx(Pencil, { size: 16 }), itemName: "Rename" }), _jsx(ContextMenuItem, { iconRenderer: _jsx(Clipboard, { size: 16 }), itemName: "Copy" }), _jsx(ContextMenuItem, { iconRenderer: _jsx(Copy, { size: 16 }), itemName: "Duplicate" }), _jsx(ContextMenuItem, { iconRenderer: _jsx(Trash2, { size: 16, className: "text-[var(--color-danger)]" }), itemName: _jsx("span", { className: "text-[var(--color-danger)]", children: "Delete" }) })] })] }));
};
