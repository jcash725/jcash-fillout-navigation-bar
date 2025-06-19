import { useRef, useState } from 'react'

export function useHorizontalDrag<T>(items: T[], setItems: (items: T[] | ((prev: T[]) => T[])) => void) {
	const containerRef = useRef<HTMLDivElement>(null)
	const draggingIndexRef = useRef<number | null>(null)
	const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

	const startDrag = (index: number) => {
		draggingIndexRef.current = index
		setDraggedIndex(index)
		document.addEventListener('mousemove', onMouseMove)
		document.addEventListener('mouseup', endDrag)
		document.body.style.userSelect = 'none'
	}

	const onMouseMove = (e: MouseEvent) => {
		const draggingIndex = draggingIndexRef.current

		if (draggingIndex === null || !containerRef.current) return

		const children = Array.from(containerRef.current.children) as HTMLElement[]
		const itemElements = children.filter(child => child.getAttribute('data-type') === 'item')

		for (let itemDomIndex = 0; itemDomIndex < itemElements.length; itemDomIndex++) {
			const el = itemElements[itemDomIndex]
			const rect: DOMRect = el.getBoundingClientRect()

			if (
				e.clientX >= rect.left &&
				e.clientX <= rect.right
			) {
				setItems((prev: T[]) => {
					const newItems = [...prev]

					if (
						draggingIndex < 0 ||
						draggingIndex >= newItems.length ||
						itemDomIndex < 0 ||
						itemDomIndex > newItems.length
					) {
						return newItems
					}

					const draggedItem = newItems[draggingIndex]

					if (draggedItem === undefined) {
						return newItems
					}

					newItems.splice(draggingIndex, 1)
					newItems.splice(itemDomIndex, 0, draggedItem)
					draggingIndexRef.current = itemDomIndex
					setDraggedIndex(itemDomIndex)
					return newItems
				})
				break
			}
		}
	}

	const endDrag = () => {
		draggingIndexRef.current = null
		setDraggedIndex(null)
		document.removeEventListener('mousemove', onMouseMove)
		document.removeEventListener('mouseup', endDrag)
		document.body.style.userSelect = ''
	}

	return {
		ref: containerRef,
		items,
		setItems,
		startDrag,
		draggedIndex,
	}
}
