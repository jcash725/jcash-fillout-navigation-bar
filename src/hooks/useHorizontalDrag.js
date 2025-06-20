import { useRef, useState } from 'react';
export function useHorizontalDrag(items, setItems) {
    const containerRef = useRef(null);
    const draggingIndexRef = useRef(null);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const startDrag = (index) => {
        draggingIndexRef.current = index;
        setDraggedIndex(index);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', endDrag);
        document.body.style.userSelect = 'none';
    };
    const onMouseMove = (e) => {
        const draggingIndex = draggingIndexRef.current;
        if (draggingIndex === null || !containerRef.current)
            return;
        const children = Array.from(containerRef.current.children);
        const itemElements = children.filter(child => child.getAttribute('data-type') === 'item');
        for (let itemDomIndex = 0; itemDomIndex < itemElements.length; itemDomIndex++) {
            const el = itemElements[itemDomIndex];
            const rect = el.getBoundingClientRect();
            if (e.clientX >= rect.left &&
                e.clientX <= rect.right) {
                setItems((prev) => {
                    const newItems = [...prev];
                    if (draggingIndex < 0 ||
                        draggingIndex >= newItems.length ||
                        itemDomIndex < 0 ||
                        itemDomIndex > newItems.length) {
                        return newItems;
                    }
                    const draggedItem = newItems[draggingIndex];
                    if (draggedItem === undefined) {
                        return newItems;
                    }
                    newItems.splice(draggingIndex, 1);
                    newItems.splice(itemDomIndex, 0, draggedItem);
                    draggingIndexRef.current = itemDomIndex;
                    setDraggedIndex(itemDomIndex);
                    return newItems;
                });
                break;
            }
        }
    };
    const endDrag = () => {
        draggingIndexRef.current = null;
        setDraggedIndex(null);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', endDrag);
        document.body.style.userSelect = '';
    };
    return {
        ref: containerRef,
        items,
        setItems,
        startDrag,
        draggedIndex,
    };
}
