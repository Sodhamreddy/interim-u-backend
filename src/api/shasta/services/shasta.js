'use strict';

/**
 * shasta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shasta.shasta');
