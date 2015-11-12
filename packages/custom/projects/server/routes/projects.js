'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
// module.exports = function(Projects, app, auth, database) {

//   app.get('/api/projects/example/anyone', function(req, res, next) {
//     res.send('Anyone can access this');
//   });

//   app.get('/api/projects/example/auth', auth.requiresLogin, function(req, res, next) {
//     res.send('Only authenticated users can access this');
//   });

//   app.get('/api/projects/example/admin', auth.requiresAdmin, function(req, res, next) {
//     res.send('Only users with Admin role can access this');
//   });

//   app.get('/api/projects/example/render', function(req, res, next) {
//     Projects.render('index', {
//       package: 'projects'
//     }, function(err, html) {
//       //Rendering a view from the Package server/views
//       res.send(html);
//     });
//   });
// };

//***********************
//


// Project authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.article.user._id.equals(req.user._id)) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

var hasPermissions = function(req, res, next) {

    req.body.permissions = req.body.permissions || ['authenticated'];

    for (var i = 0; i < req.body.permissions.length; i++) {
      var permission = req.body.permissions[i];
      if (req.acl.user.allowed.indexOf(permission) === -1) {
            return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
        };
    };

    next();
};

module.exports = function(Projects, app, auth) {

  var projects = require('../controllers/projects')(Projects);

  app.route('/api/projects')
    .get(projects.all)
    .post(auth.requiresLogin, hasPermissions, projects.create);
  app.route('/api/projects/:projectId')
    .get(auth.isMongoId, projects.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, projects.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, projects.destroy);

  // Finish with setting up the articleId param
  app.param('projectId', projects.article);
};
