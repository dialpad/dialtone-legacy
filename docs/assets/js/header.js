$(document).ready(function() {
  const showTooltipClass = 'd-tooltip--show';
  const hideTooltipClass = 'd-tooltip--hide';

  const headerGitRepoIcon = $('#header-git-repo-icon');
  const headerCodepenTemplateIcon = $('#header-codepen-template-icon');
  const headerInvertColorsIcon = $('#header-invert-colors-icon');

  const headerGitRepoTooltip = $('#header-git-repo-tooltip');
  const headerCodepenTemplateTooltip = $('#header-codepen-template-tooltip');
  const headerInvertColorsTooltip = $('#header-invert-colors-tooltip');

  function showTooltip (tooltip) {
    $(tooltip).removeClass(hideTooltipClass);
    $(tooltip).addClass(showTooltipClass);
  };

  function hideTooltip (tooltip) {
    $(tooltip).removeClass(showTooltipClass);
    $(tooltip).addClass(hideTooltipClass);
  };

  headerGitRepoIcon
    .mouseenter(() => showTooltip(headerGitRepoTooltip))
    .mouseleave(() => hideTooltip(headerGitRepoTooltip));
  
  headerCodepenTemplateIcon
    .mouseenter(() => showTooltip(headerCodepenTemplateTooltip))
    .mouseleave(() => hideTooltip(headerCodepenTemplateTooltip));
  
  headerInvertColorsIcon
    .mouseenter(() => showTooltip(headerInvertColorsTooltip))
    .mouseleave(() => hideTooltip(headerInvertColorsTooltip));
});
