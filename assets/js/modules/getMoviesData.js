export const getMoviesData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Maaf ada kesalahan!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
