'use client';

import React, { useRef, useEffect } from "react"
import { DataViewContainer } from "../../ui/Containers"
import { DataViewList } from "../../ui/Lists";
import { ItemProps } from "../../ui/Items";

export interface ContentViewProps {
    title: string,
  data: ItemProps[]
}

export const ContentCard: React.FC<ContentViewProps> = ({ title, data }) => {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      console.log("ProfileInfoView container:", containerRef.current)
    }
  }, [])

  return (
    <DataViewContainer ref={containerRef} title={title}>
      <DataViewList data={data} />
    </DataViewContainer>
  )
}
