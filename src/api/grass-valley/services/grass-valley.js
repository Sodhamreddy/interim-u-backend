'use strict';

/**
 * grass-valley service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grass-valley.grass-valley');
