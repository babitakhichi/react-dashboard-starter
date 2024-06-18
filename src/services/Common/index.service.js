import { Common } from "apiEndPoints";
import { logger } from "utils";
import APIrequest from "../axios";

export const CommonService = {
  countryService: async () => {
    try {
      const payload = {
        ...Common.country,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  stateService: async (queryParams) => {
    try {
      const payload = {
        ...Common.state,
        queryParams,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};
