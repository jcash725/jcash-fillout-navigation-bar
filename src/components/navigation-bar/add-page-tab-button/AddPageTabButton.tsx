import React from 'react'
import { Plus } from 'lucide-react'

type Props = {
	onClick: () => void;
};

export const AddPageTabButton = ({ onClick }: Props) => {
	return (
		<div
			className="navigation-bar-item active cursor-pointer ml-5"
			onClick={onClick}
			role="button"
		>
			<Plus size={16} className="text-black"/>
			Add page
		</div>
	)
}