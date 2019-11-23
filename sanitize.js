export const sanitizeObject = (data) =>
  Object.keys(data).reduce(
    (prev, curr) =>
      data[curr] || data[curr] === false || data[curr] === 0
        ? { ...prev, [curr]: data[curr] }
        : prev,
    {}
  );
