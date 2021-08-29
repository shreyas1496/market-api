import { TableRow } from "~/types";

export const errorHandler = (type: string) => (error: unknown) => {
  console.error(type);
  console.error(error);
};

export const formatResponseForUI = (input: Record<number, TableRow>) => {
  return Object.values(input).map(
    ({ name, ltp, movingAverageValues, closeHistory }) => {
      return {
        name,
        ltp,
        prevClose: closeHistory[0],
        movingAverageValues: movingAverageValues.map(
          ({ duration, leads, history }) => ({
            duration,
            leads,
            value: history[0],
          })
        ),
      };
    }
  );
};
