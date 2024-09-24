'use strict';

/**
 * castle-hill service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::castle-hill.castle-hill');
