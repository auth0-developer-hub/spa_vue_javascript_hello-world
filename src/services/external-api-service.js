import axios from "axios";

export const callExternalApi = async (options) => {
  try {
    const response = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { response } = error;

      if (!response) {
        return {
          data: null,
          error: {
            message: "http request failed",
          },
        };
      }

      const { data, statusText } = response;

      const message = data && data.message ? data.message : statusText;

      return {
        data: null,
        error: {
          message: message,
        },
      };
    }

    return {
      data: null,
      error: {
        message: error.message,
      },
    };
  }
};
