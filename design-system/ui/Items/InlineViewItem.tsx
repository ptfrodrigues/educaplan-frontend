import React, { useState, useEffect, useRef } from "react"

export interface ItemProps {
  key: string
  value: string
}

export interface InlineViewItemProps {
  item: ItemProps
  onSave: (key: string, newValue: string) => void
  editingKey: string | null // Current editing key
  setEditingKey: (key: string | null) => void // Function to set the editing key
}

export const InlineViewItem = React.forwardRef<HTMLDivElement, InlineViewItemProps>(
  ({ item, onSave, editingKey, setEditingKey }, ref) => {
    const [value, setValue] = useState(item.value)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    // Handle double click to enable editing
    const handleDoubleClick = () => {
      setEditingKey(item.key) // Set the current key as the editing key
      if (timerRef.current) clearTimeout(timerRef.current)
    }

    // Handle saving the new value
    const handleSave = () => {
      onSave(item.key, value)
      setEditingKey(null) // Exit editing mode
    }

    // Handle Enter key for saving
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSave()
      }
    }

    // Handle timeout to revert to non-editing state
    useEffect(() => {
      if (editingKey === item.key && value === item.value) {
        // Start timeout only if the value is unchanged
        timerRef.current = setTimeout(() => {
          setEditingKey(null)
        }, 5000)

        return () => {
          if (timerRef.current) clearTimeout(timerRef.current)
        }
      } else if (timerRef.current) {
        // Reset timeout if value changes
        clearTimeout(timerRef.current)
      }
    }, [editingKey, value, item.key, item.value, setEditingKey])

    const isEditing = editingKey === item.key

    return (
      <div ref={ref} className="relative flex align-text-bottom">
        <span className="text-sm">
          <strong>{item.key}:</strong>
        </span>

        {isEditing ? (
          <div className="flex flex-1 items-center">
            <input
              className="flex px-2 text-sm flex-grow"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        ) : (
          <span
            className="ml-2 text-sm"
            onDoubleClick={handleDoubleClick}
          >
            {item.value}
          </span>
        )}
      </div>
    )
  }
)

InlineViewItem.displayName = "InlineViewItem"
