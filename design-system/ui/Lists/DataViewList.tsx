import React, { useRef, useState } from "react"
import { ItemProps, InlineViewItem } from "../Items/InlineViewItem"

export function DataViewList({ data }: { data: ItemProps[] }) {
  const refs = useRef<HTMLDivElement[]>([])
  const [editingKey, setEditingKey] = useState<string | null>(null) // Track the current editing key
  const [items, setItems] = useState(data)

  const handleSave = (key: string, newValue: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, value: newValue } : item
      )
    )
    setEditingKey(null)
  }

  return (
    <div className="space-y-2 bg-card">
      {items.map((item, index) => (
        <InlineViewItem
          key={index}
          ref={(el) => {
            refs.current[index] = el as HTMLDivElement
          }}
          item={item}
          onSave={handleSave}
          editingKey={editingKey} // Pass the current editing key
          setEditingKey={setEditingKey} // Pass function to update editing key
        />
      ))}
    </div>
  )
}
