/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

/* eslint-env node */

module.exports = {
	env: {
		amd: true,
		browser: true,
	},
	extends: '../../.eslintrc.js',
	globals: {
		__CONFIG__: true,
		Liferay: true,
	},
	rules: {
		'require-jsdoc': 'off',
	},
};
