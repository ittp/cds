const entry = await strapi.entityService.findOne('api::server.ip', 1, {
  populate: { someRelation: true },
});
