import { useState, useEffect } from 'react';
import { NavigationBar } from 'src/components/navigation-bar/NavigationBar';
import { PageView } from 'src/components/page-view/PageView';
import {
  type NavItem,
  loadSavedPages,
  resetToDefault,
  STORAGE_KEY,
} from 'src/data/navigationData';
import { useHorizontalDrag } from 'src/hooks/useHorizontalDrag';

export const NavigationContainer = () => {
  const [items, setItems] = useState<NavItem[]>([]);
  const [activePageId, setActivePageId] = useState<string | null>(null);

  const {
    ref,
    startDrag,
    draggedIndex
  } = useHorizontalDrag<NavItem>(items, setItems);

  useEffect(() => {
    const loaded = loadSavedPages();
    setItems(loaded);
    setActivePageId(loaded[0]?.id || null);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const handleAddPage = (insertIndex: number) => {
    const newId = `page-${Date.now()}`;
    const newPage = { id: newId, name: 'New Page' };
    const newItems = [...items];
    newItems.splice(insertIndex, 0, newPage);
    setItems(newItems);
  };

  const handleReset = () => {
    const defaultPages = resetToDefault();
    setItems(defaultPages);
    setActivePageId(defaultPages[0]?.id || null);
  };

  const activeItem = items.find((item) => item.id === activePageId);

  return (
    <div className="min-h-screen flex flex-col">
      <PageView activeItem={activeItem} />
      <NavigationBar
        items={items}
        activePageId={activePageId}
        draggedIndex={draggedIndex}
        containerRef={ref}
        onItemClick={setActivePageId}
        onItemMouseDown={startDrag}
        onAddPage={handleAddPage}
        onReset={handleReset}
      />
    </div>
  );
}; 