'use strict';

/**
 * palo-cedro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::palo-cedro.palo-cedro');
