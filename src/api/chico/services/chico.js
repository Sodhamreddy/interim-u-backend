'use strict';

/**
 * chico service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chico.chico');
