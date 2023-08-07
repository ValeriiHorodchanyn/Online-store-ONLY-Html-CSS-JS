export const getLinearGradient = (inputRange) => {
  return `linear-gradient(to right, #ba2525 0%, #ba2525 ${inputRange.value / (inputRange.getAttribute('max') / 100)}%, #b8b6bf ${inputRange.value / (inputRange.getAttribute('max') / 100)}%, #b8b6bf 100%)`;
};