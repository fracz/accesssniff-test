var AccessSniff = require('access-sniff');

AccessSniff
  .default(['files/*.html'], {
      force: true, 
      ignore: [
        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
        'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2'
      ]})
  .then(function(report) {
    AccessSniff.report(report, {});
  });