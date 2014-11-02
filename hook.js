var gith = require('gith').create(9001);
var winston = require('winston');

var execFile = require('child_process').execFile;


winston.add(winston.transports.File, { filename: 'tmp.log' });
winston.remove(winston.transports.Console);

gith({repo: 'eolhing/website'}).on('all', function(payload)
{
	winston.info("repo");
    if(payload.branch === 'master')
    {
		winston.info("branch");
		execFile('hook.sh', function(error, stdout, stderr)
		{
				winston.info("exec");
				console.log('exec complete');
		});
    }
});
