export const numberWithCommas = (number: string | undefined | null) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? '';
};
