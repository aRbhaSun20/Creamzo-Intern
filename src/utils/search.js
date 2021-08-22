export const handleSearch = (val, inputVal) => {
  if (inputVal === "") return val;
  else {
    const searchedPins = val?.filter((pin) => {
      return (
        pin?.tags?.find((item) => {
          return item?.includes(inputVal);
        }) || pin?.title?.includes(inputVal)
      );
    });
    return searchedPins;
  }
};

export const handleSearchBlog = (val, inputVal) => {
  if (inputVal === "") return val;
  else {
    const searchedBlogs = val?.filter((blog) => {
      return (
        blog?.title?.toLowerCase().includes(inputVal) ||
        blog?.desc?.toLowerCase().includes(inputVal)
      );
    });
    return searchedBlogs;
  }
};
