export const handleItemClick = (
  itemId: number,
  setSelectedItem: (id: number) => void
) => {
  setSelectedItem(itemId)
  localStorage.setItem('selectedItem', itemId.toString())
}
