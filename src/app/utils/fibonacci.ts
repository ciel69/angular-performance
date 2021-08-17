
export const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

export const logFibonacci = (num: number) => {
  console.log('logFibonacci');
  return fibonacci(num);
};
