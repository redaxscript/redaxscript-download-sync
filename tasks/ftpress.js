module.exports = () =>
{
	'use strict';

	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'www/htdocs/w00976cb/redaxscript/files',
			options:
			{
				command:
				[
					'set ssl:verify-certificate no',
					'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'rm -rf www/htdocs/w00976cb/redaxscript/cache/pages',
					'exit'
				]
			}
		},
		download:
		{
			src:
			[
				'www/htdocs/w00976cb/redaxscript/files'
			],
			dest: 'download',
			options:
			{
				command:
				[
					'set ssl:verify-certificate no',
					'mirror {SOURCE} {TARGET} --delete-first --parallel=10 --use-pget-n=10',
					'exit'
				]
			}
		},
		options:
		{
			url: process.env.FTP_URL
		}
	};

	return config;
};
