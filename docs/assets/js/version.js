$(document).ready(function() {
  const dialtoneVueBadge = $('#dialtone-vue-badge');

  $.get('https://vue.dialpad.design/version.txt')
    .done(function(response) {
      const badgeSrc = `https://img.shields.io/badge/Vue-v${response}-A687FF`
      dialtoneVueBadge.attr("src", badgeSrc)
    })
});
