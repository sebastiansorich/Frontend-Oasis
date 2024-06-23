export const handleDelete = async (row, columns, dataUrl, data, setData) => {
    const idField = columns.find(col => col.accessor.startsWith('id_'));
    const id = row[idField.accessor];
  
    if (!id) {
      console.error('No se pudo determinar el ID del elemento a eliminar', row);
      return;
    }
  
    try {
      const response = await fetch(`${dataUrl}/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setData(data.filter(item => item[idField.accessor] !== id));
      } else {
        const errorText = await response.text();
        console.error('Error al eliminar el elemento: ', response.status, errorText);
      }
    } catch (error) {
      console.error('Error al eliminar el elemento: ', error);
    }
  };
  