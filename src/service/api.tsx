import axios from 'axios';

const ApiCall = async ({
  url,
  method = 'GET',
  body,
  header = {},
}: ApiData) => {
  try {
    const { status, data } = await axios({
      method,
      url,
      data: JSON.stringify(body),
      headers: { ...header, 'Content-Type': 'application/json' },
    });

    if (status >= 200 && status < 300) {
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

interface ApiData {
  url: string;
  method: string;
  body?: object;
  header?: object;
}

export default ApiCall;
