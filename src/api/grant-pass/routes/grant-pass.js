'use strict';

/**
 * grant-pass router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::grant-pass.grant-pass');
