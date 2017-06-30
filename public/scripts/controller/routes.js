'use strict';

let token;

page('/', inputController.init);
page('/token/:token', function(ctx) {
  console.log(ctx.params.token);
  token = ctx.params.token;
  page('/input');
});
page('/input', inputController.init);
page('/loading', loadingController.init);
page('/results', resultsController.init);
page('/about', aboutController.init);

page();
