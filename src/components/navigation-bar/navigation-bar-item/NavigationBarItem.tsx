import React, { useState, useRef, useEffect, useMemo } from 'react'
import { EllipsisVertical, Info } from 'lucide-react'
import { ContextMenu } from 'src/components/navigation-bar/context-menu/ContextMenu'

type Props = {
	isActive: boolean
	name: string
	onMouseDown: () => void
	className?: string
	onClick?: () => void
	isFocused?: boolean
};

export const NavigationBarItem = ({
	isActive,
	onMouseDown,
	name,
	onClick,
	isFocused
}: Props) => {

	const [menuOpen, setMenuOpen] = useState(false)
	const itemRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!menuOpen) return
		const handleClick = (e: MouseEvent) => {
			if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
				setMenuOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [menuOpen])

	const handleContextMenu = (e: React.MouseEvent) => {
		e.preventDefault()
		if (onClick) {
			onClick()
		}
		setMenuOpen(true)
	}

	const handleCloseMenu = () => setMenuOpen(false)

	const activeOrFocusedStyles = useMemo(() => isFocused ?
		'focused' :
		isActive ?
			'active' :
			'', [isFocused, isActive])

	return (
		<div
			data-type="item"
			className={`relative font-inter navigation-bar-item font-sans cursor-grab ${activeOrFocusedStyles}`}
			role="button"
			onMouseDown={onMouseDown}
			onClick={onClick}
			onContextMenu={handleContextMenu}
			ref={itemRef}
		>
			<Info size={20} className="icon"/>

			{name}

			{isActive && <EllipsisVertical size={16} className="active-icon-show-menu"/>}

			{menuOpen && <ContextMenu open={menuOpen} onClose={handleCloseMenu}/>}

		</div>
	)
}