let timer;

/*
* Set's a global timer to debounce the execution of a function.
* @param { object } func - the function that is going to be called after timeout
* @param { number } [timeout=300] timeout
* */
export function debounce (func, timeout = 300) {
  clearTimeout(timer);
  timer = setTimeout(func, timeout);
}

export default {
  debounce,
};
