import { Copy, Flag, Pencil, Clipboard, Trash2 } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { ContextMenuItem } from "src/components/navigation-bar/context-menu/context-menu-item/ContextMenuItem"

type ContextMenuProps = {
	open: boolean;
	onClose: () => void;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
	open,
	onClose,
}) => {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!open) return

		const handleClick = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClick)

		return () => document.removeEventListener('mousedown', handleClick)
	}, [open, onClose])

	if (!open) return null

	return (
		<div
			ref={menuRef}
			className="context-menu-container absolute bottom-full left-0 mb-2"
		>
			<div className="title font-melody">Settings</div>

			<div className="sub-context-menu-container">
				<ContextMenuItem
					iconRenderer={<Flag size={16} fill="currentColor" className="text-[var(--color-blue-100)]"/>}
					itemName={"Set as first page"}/>

				<ContextMenuItem iconRenderer={<Pencil size={16}/>}
				                 itemName={"Rename"}/>


				<ContextMenuItem iconRenderer={<Clipboard size={16}/>}
				                 itemName={"Copy"}/>


				<ContextMenuItem iconRenderer={<Copy size={16}/>}
				                 itemName={"Duplicate"}/>

				<ContextMenuItem iconRenderer={<Trash2 size={16} className="text-[var(--color-danger)]"/>}
				                 itemName={<span className="text-[var(--color-danger)]">Delete</span>}/>

			</div>
		</div>
	)
} 