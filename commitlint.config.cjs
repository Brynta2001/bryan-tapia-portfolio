// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.)\))?!?: (.)$/,
      headerCorrespondence: ["type", "scope", "subject"],
      noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
    },
  },
};
