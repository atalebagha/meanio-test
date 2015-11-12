exports.models = {

  Article: {
    id: 'Project',
    required: ['content', 'title'],
    properties: {

      title: {
        type: 'string',
        description: 'Title of the project'
      },
      description: {
        type: 'string',
        description: 'description of the project'
      },
      permissions: {
        type: 'Array',
        description: 'Permissions for viewing the project'
      }
    }
  }
};
