import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const GetProfile =
  async (): Promise<any> => {
    const data = await axios
      .get(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
      })
      .then((response) => { return response.data; })
      .catch((error) => { return null });

    return data;
  };