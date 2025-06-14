'use client'

export const RowLabel: React.FC<any> = ({ data, rowNumber }) => {
  const navItem = data as { link?: { label?: string } } | undefined

  const label = navItem?.link?.label
    ? `Nav item ${typeof rowNumber === 'number' ? rowNumber + 1 : ''}: ${navItem.link.label}`
    : 'Row'

  return <div>{label}</div>
}
