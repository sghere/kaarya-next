const { format } = require("date-fns");

export const formatDateTime = (isoString) => {
  return format(new Date(isoString), "h:mma, d MMM");
};
