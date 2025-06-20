import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo } from 'react';
import { EllipsisVertical, Info } from 'lucide-react';
import { ContextMenu } from 'src/components/navigation-bar/context-menu/ContextMenu';
export const NavigationBarItem = ({ isActive, onMouseDown, name, onClick, isFocused }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const itemRef = useRef(null);
    useEffect(() => {
        if (!menuOpen)
            return;
        const handleClick = (e) => {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);
    const handleContextMenu = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
        setMenuOpen(true);
    };
    const handleCloseMenu = () => setMenuOpen(false);
    const activeOrFocusedStyles = useMemo(() => isFocused ?
        'focused' :
        isActive ?
            'active' :
            '', [isFocused, isActive]);
    return (_jsxs("div", { "data-type": "item", className: `relative font-inter navigation-bar-item font-sans cursor-grab ${activeOrFocusedStyles}`, role: "button", onMouseDown: onMouseDown, onClick: onClick, onContextMenu: handleContextMenu, ref: itemRef, children: [_jsx(Info, { size: 20, className: "icon" }), name, isActive && _jsx(EllipsisVertical, { size: 16, className: "active-icon-show-menu" }), menuOpen && _jsx(ContextMenu, { open: menuOpen, onClose: handleCloseMenu })] }));
};
