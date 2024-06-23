export const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    setData(result);
    console.log('Data fetched:', result);
  } catch (error) {
    console.error('Error fetching data: ', error);
    // Puedes manejar el error aquí, por ejemplo, seteando un estado de error
  }
};
