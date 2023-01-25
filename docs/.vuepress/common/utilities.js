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

/*
* Returns the formatted note with the commit and PR links.
* Removes extra asterisks (known issue in semantic-release-changelog-json plugin).
* */
export const ReleaseNoteFormatter = {
  withoutExtraAsterisks: (note) => note.replace(/\*\*/g, ''),

  withCommitLink: (note) => {
    return note.replace(/\(([^)]+)\)$/, (match, text) => {
      const link = `<a href="https://github.com/dialpad/dialtone/commit/${text}">${text}</a>`;
      return `(${link})`;
    });
  },

  withPrLink: (note) => {
    return note.replace(/(\([^)]+\))(?!.*\1)/, (match, text) => {
      const content = text.slice(1, -1);
      if (content[0] === '#') {
        const link = `<a href="https://github.com/dialpad/dialtone/pull/${content.slice(1)}">${text}</a>`;
        return `${link}`;
      }
      return text;
    });
  },
};

export default {
  debounce,
  ReleaseNoteFormatter,
};
