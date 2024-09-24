'use strict';

/**
 * yuba service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yuba.yuba');
