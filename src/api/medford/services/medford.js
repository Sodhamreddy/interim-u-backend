'use strict';

/**
 * medford service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medford.medford');
