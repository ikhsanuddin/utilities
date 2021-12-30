export const getPagination = (pagination, filtersArg, sorter) => {
  const filters: any = Object.keys(filtersArg).reduce((obj, key) => {
    const newObj = { ...obj };
    // @ts-ignore
    newObj[key] = getValue(filtersArg[key]);
    return newObj;
  }, {});

  const params = {
    currentPage: pagination.current,
    pageSize: pagination.pageSize,
    ...filters,
  };
  if (sorter.field) {
    params.sorter = `${sorter.field}_${sorter.order}`;
  }

  const { currentPage, pageSize } = params;
  const limit = pageSize;
  const offset = currentPage === 1 ? 0 : (currentPage - 1) * pageSize;

  return { limit, offset, ...params };
};
