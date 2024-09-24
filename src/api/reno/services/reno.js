'use strict';

/**
 * reno service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reno.reno');
