'use strict';

/**
 * submit-your-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::submit-your-project.submit-your-project');
