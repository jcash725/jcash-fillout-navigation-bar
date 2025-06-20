import React, { useState } from 'react'
import { NavigationBarItem } from "src/components/navigation-bar/navigation-bar-item/NavigationBarItem"
import { RotateCcw } from 'lucide-react'
import { AddPageButton } from "src/components/navigation-bar/add-page-button/AddPageButton"
import {
	type NavItem,
} from "src/data/navigationData"
import { AddPageTabButton } from "src/components/navigation-bar/add-page-tab-button/AddPageTabButton"

type Props = {
	items: NavItem[];
	activePageId: string | null;
	draggedIndex: number | null;
	containerRef: React.RefObject<HTMLDivElement>;
	onItemClick: (id: string) => void;
	onItemMouseDown: (index: number) => void;
	onAddPage: (index: number) => void;
	onReset: () => void;
};

export const NavigationBar = ({
	items,
	activePageId,
	draggedIndex,
	containerRef,
	onItemClick,
	onItemMouseDown,
	onAddPage,
	onReset,
}: Props) => {
	const [hoveredZone, setHoveredZone] = useState<number | null>(null)

	return (
		<div className="fixed bottom-10 w-full z-50">
			<div ref={containerRef} className="flex flex-row w-full">
				<AddPageButton index={0}
				               hoveredZone={hoveredZone}
				               setHoveredZone={setHoveredZone}
				               handleAddPage={onAddPage}
				               isDisabled={draggedIndex !== null}/>

				{items.map((item, index) => (
					<React.Fragment key={item.id}>
						<NavigationBarItem
							isActive={item.id === activePageId}
							name={item.name}
							onMouseDown={() => onItemMouseDown(index)}
							onClick={() => onItemClick(item.id)}
							isFocused={draggedIndex === index}
						/>

						{index < items.length - 1 && (
							<AddPageButton
								index={index + 1}
								hoveredZone={hoveredZone}
								setHoveredZone={setHoveredZone}
								handleAddPage={onAddPage}
								isDisabled={draggedIndex !== null}
							/>
						)}
					</React.Fragment>
				))}
				<AddPageTabButton onClick={() => onAddPage(items.length)}/>
			</div>

			<div className="flex justify-center mt-4">
				<button
					onClick={onReset}
					className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
					title="Reset to default tabs"
				>
					<RotateCcw size={16}/>
					Reset Navigation
				</button>
			</div>
		</div>
	)
}