import { jsx as _jsx } from "react/jsx-runtime";
import { CirclePlus } from 'lucide-react';
export const AddPageButton = ({ index, hoveredZone, setHoveredZone, handleAddPage, isDisabled, }) => {
    const handleMouseLeave = () => setHoveredZone(-1);
    const isHovered = hoveredZone === index;
    return (_jsx("div", { className: `flex justify-center items-center px-2.5 hover:px-5`, onMouseEnter: () => setHoveredZone(index), onMouseLeave: handleMouseLeave, style: {
            minHeight: 0,
            transition: 'min-height 0.15s',
            pointerEvents: isDisabled ?
                'none' :
                undefined
        }, children: _jsx("button", { className: `flex items-center justify-center transition-all duration-150 
				${isHovered ?
                'opacity-100 pointer-events-auto' :
                'opacity-0 pointer-events-none'}`, onClick: () => handleAddPage(index), "aria-label": "Add page", tabIndex: isHovered ?
                0 :
                -1, children: isHovered && _jsx(CirclePlus, { size: 16 }) }) }, `plus-${index}`));
};
