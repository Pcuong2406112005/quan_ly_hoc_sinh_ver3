import { computed, ref } from 'vue';

export function usePagination(dataSource, search, pageSize = 5) {
  const currentPage = ref(0);
  const filterData = computed(() => {
    return dataSource.value.filter(student => {
      const nameMatch = search.name
        ? student.name.toLowerCase().includes(search.name.toLowerCase())
        : true;
      const ageMatch = search.age
        ? student.age === parseInt(search.age)
        : true;
      const lopMatch = search.lop
        ? student.lop === search.lop
        : true;
      return nameMatch && ageMatch && lopMatch;
    });
  });
  const paginatedData = computed(() => {
    const start = currentPage.value * pageSize;
    return filterData.value.slice(start, start + pageSize);
  });
  const totalPage = computed(() =>
    Math.ceil(filterData.value.length / pageSize)
  );
  const NextPage = () => {
    currentPage.value = (currentPage.value + 1) % totalPage.value;
  };
  const PrevPage = () => {
    currentPage.value =
      currentPage.value > 0 ? currentPage.value - 1 : totalPage.value - 1;
  };
  return {
    currentPage,
    paginatedData,
    totalPage,
    NextPage,
    PrevPage
  };
}
