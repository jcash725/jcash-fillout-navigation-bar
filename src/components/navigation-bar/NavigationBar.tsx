import React, { useEffect, useState } from 'react'
import { NavigationBarItem } from "src/components/navigation-bar/navigation-bar-item/NavigationBarItem"
import { useHorizontalDrag } from "src/hooks/useHorizontalDrag"
import { Plus, RotateCcw } from 'lucide-react'
import { AddPageButton } from "src/components/navigation-bar/add-page-button/AddPageButton"
import {
	defaultNavigationBarPages,
	STORAGE_KEY,
	type NavItem,
	loadSavedPages,
	resetToDefault
} from "src/data/navigationData"
import { AddPageTabButton } from "src/components/navigation-bar/add-page-tab-button/AddPageTabButton"

export const NavigationBar = () => {
	const [items, setItems] = useState<NavItem[]>([])
	const [hoveredZone, setHoveredZone] = useState<number | null>(null)
	const [activePageId, setActivePageId] = useState<string | null>(null)

	const {
		ref,
		startDrag,
		draggedIndex
	} = useHorizontalDrag<NavItem>(items, setItems)

	useEffect(() => {
		const loaded = loadSavedPages()
		setItems(loaded)
		setActivePageId(loaded[0]?.id || null)
	}, [])

	useEffect(() => {
		if (items.length > 0) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
		}
	}, [items])

	const handleStartDrag = (index: number) => {
		startDrag(index)
		document.addEventListener('mouseup', handleEndDrag)
	}

	const handleEndDrag = () => {
		document.removeEventListener('mouseup', handleEndDrag)
	}

	const handleAddPage = (insertIndex: number) => {
		const newId = `page-${Date.now()}`
		const newPage = {
			id: newId,
			name: `New Page`
		}
		setItems(prev => {
			const newItems = [...prev]
			newItems.splice(insertIndex, 0, newPage)
			return newItems
		})
	}

	const handleReset = () => {
		const defaultPages = resetToDefault()
		setItems(defaultPages)
		setActivePageId(defaultPages[0]?.id || null)
	}

	const activeItem = items.find(item => item.id === activePageId)

	return (
		<div className="min-h-screen flex flex-col">
			<div
				className="flex-1 flex pt-10 justify-center text-4xl font-bold bg-gray-50 border-b border-gray-200">
				{activeItem ?
					activeItem.name :
					''}
			</div>
			<div className="fixed bottom-10  w-full z-50">
				<div ref={ref} className="flex flex-row w-full">
					<AddPageButton index={0}
					               hoveredZone={hoveredZone}
					               setHoveredZone={setHoveredZone}
					               handleAddPage={handleAddPage}
					               isDisabled={draggedIndex !== null}/>

					{items.map((item, index) => (
						<React.Fragment key={item.id}>
							<NavigationBarItem
								isActive={item.id === activePageId}
								name={item.name}
								onMouseDown={() => handleStartDrag(index)}
								onClick={() => setActivePageId(item.id)}
								isFocused={draggedIndex === index}
							/>

							{index < items.length - 1 && (
								<AddPageButton 
									index={index + 1}
									hoveredZone={hoveredZone}
									setHoveredZone={setHoveredZone}
									handleAddPage={handleAddPage}
									isDisabled={draggedIndex !== null}
								/>
							)}
						</React.Fragment>
					))}
					<AddPageTabButton onClick={() => handleAddPage(items.length)} />
				</div>

				<div className="flex justify-center mt-4">
					<button
						onClick={handleReset}
						className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
						title="Reset to default tabs"
					>
						<RotateCcw size={16}/>
						Reset Navigation
					</button>
				</div>
			</div>
		</div>
	)
}