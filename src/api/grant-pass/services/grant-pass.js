'use strict';

/**
 * grant-pass service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grant-pass.grant-pass');
