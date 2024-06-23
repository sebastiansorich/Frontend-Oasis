export const handleEdit = (rowIndex, data, setEditedItem, setEditedIndex) => {
    const editedRow = data[rowIndex];
    setEditedItem({ ...editedRow });
    setEditedIndex(rowIndex);
  };
  
  export const handleSaveEdit = (data, editedItem, editedIndex, setData, setEditedItem, setEditedIndex) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[editedIndex] = editedItem;
      return newData;
    });
  
    setEditedItem(null);
    setEditedIndex(null);
  };
  