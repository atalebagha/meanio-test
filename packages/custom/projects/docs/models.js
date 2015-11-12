exports.models = {

  Article: {
    id: 'Project',
    required: ['description', 'title', 'due'],
    properties: {

      title: {
        type: 'string',
        description: 'Title of the project'
      },
      description: {
        type: 'string',
        description: 'description of the project'
      },
      due: {
        type: 'date',
        description: 'due date of project'
      },
      permissions: {
        type: 'Array',
        description: 'Permissions for viewing the project'
      }
    }
  }
};
