import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { NavigationBarItem } from "src/components/navigation-bar/navigation-bar-item/NavigationBarItem";
import { RotateCcw } from 'lucide-react';
import { AddPageButton } from "src/components/navigation-bar/add-page-button/AddPageButton";
import { AddPageTabButton } from "src/components/navigation-bar/add-page-tab-button/AddPageTabButton";
export const NavigationBar = ({ items, activePageId, draggedIndex, containerRef, onItemClick, onItemMouseDown, onAddPage, onReset, }) => {
    const [hoveredZone, setHoveredZone] = useState(null);
    return (_jsxs("div", { className: "fixed bottom-10 w-full z-50", children: [_jsxs("div", { ref: containerRef, className: "flex flex-row w-full", children: [_jsx(AddPageButton, { index: 0, hoveredZone: hoveredZone, setHoveredZone: setHoveredZone, handleAddPage: onAddPage, isDisabled: draggedIndex !== null }), items.map((item, index) => (_jsxs(React.Fragment, { children: [_jsx(NavigationBarItem, { isActive: item.id === activePageId, name: item.name, onMouseDown: () => onItemMouseDown(index), onClick: () => onItemClick(item.id), isFocused: draggedIndex === index }), index < items.length - 1 && (_jsx(AddPageButton, { index: index + 1, hoveredZone: hoveredZone, setHoveredZone: setHoveredZone, handleAddPage: onAddPage, isDisabled: draggedIndex !== null }))] }, item.id))), _jsx(AddPageTabButton, { onClick: () => onAddPage(items.length) })] }), _jsx("div", { className: "flex justify-center mt-4", children: _jsxs("button", { onClick: onReset, className: "flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors", title: "Reset to default tabs", children: [_jsx(RotateCcw, { size: 16 }), "Reset Navigation"] }) })] }));
};
