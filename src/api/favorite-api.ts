import axios from 'axios';

import { transformArtists, transformTracks } from '../utils/transform_dto';

const BASE_URL = 'https://api.spotify.com/v1';

export const GetTopTracks =
  async (limit: number, time: string, offset: number) => {
    const data = await axios
      .get(`${BASE_URL}/me/top/tracks?time_range=${time}&limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
      })
      .then((response) => { return response.data; });

      return transformTracks(data);
  };

export const GetTopArtists =
  async (limit: number, time: string, offset: number): Promise<any> => {
    const data = await axios
      .get(`${BASE_URL}/me/top/artists?time_range=${time}&limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
      })
      .then((response) => { return response.data; });

    return transformArtists(data);
  };


