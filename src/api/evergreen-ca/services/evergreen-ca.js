'use strict';

/**
 * evergreen-ca service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::evergreen-ca.evergreen-ca');
