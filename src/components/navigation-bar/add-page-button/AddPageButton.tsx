import { CirclePlus } from 'lucide-react'
import React from 'react'

type Props = {
	index: number
	hoveredZone: number | null
	setHoveredZone: (index: number) => void
	handleAddPage: (insertIndex: number) => void
	isDisabled: boolean
};
export const AddPageButton = ({
	index,
	hoveredZone,
	setHoveredZone,
	handleAddPage,
	isDisabled,
}: Props) => {
	const handleMouseLeave = () => setHoveredZone(-1)
	const isHovered = hoveredZone === index
	return (
		<div

			key={`plus-${index}`}
			className={`flex justify-center items-center px-2.5 hover:px-5`}
			onMouseEnter={() => setHoveredZone(index)}
			onMouseLeave={handleMouseLeave}
			style={{
				minHeight: 0,
				transition: 'min-height 0.15s',
				pointerEvents: isDisabled ?
					'none' :
					undefined

			}}
		>
			<button
				className={`flex items-center justify-center transition-all duration-150 
				${isHovered ?
					'opacity-100 pointer-events-auto' :
					'opacity-0 pointer-events-none'}`}
				onClick={() => handleAddPage(index)}
				aria-label="Add page"
				tabIndex={isHovered ?
					0 :
					-1}
			>
				{isHovered && <CirclePlus size={16}/>}
			</button>
		</div>
	)
}