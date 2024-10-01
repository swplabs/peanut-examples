module.exports = ({ eslintConfig }) => {
  const customRules = {
    ...eslintConfig.overrideConfig.rules
    // modifiy rules here
  };

  eslintConfig.overrideConfig.rules = customRules;

  return eslintConfig;
};
