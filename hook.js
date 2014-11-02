var gith = require('gith').create(9001);

var execFile = require('child_process').execFile;

gith({repo: 'eolhing/website'}).on('all', function(payload)
{
    if(payload.branch === 'master')
    {
  		execFile('hook.sh', function(error, stdout, stderr)
  		{
  				console.log('exec complete');
  		});
    }
});
