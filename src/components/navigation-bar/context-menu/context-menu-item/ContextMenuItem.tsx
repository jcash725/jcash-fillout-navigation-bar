import { Flag } from 'lucide-react'
import React, { ReactNode } from 'react'

type Props = {
	iconRenderer: ReactNode
	itemName: ReactNode
};

export const ContextMenuItem = ({
	iconRenderer,
	itemName
}: Props) => {
	return (
		<div className="item-container">
			<span className="icon">{iconRenderer}</span>
			<div className="name">{itemName}</div>
		</div>
	)
}