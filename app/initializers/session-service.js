export function initialize(container, application) {
  application.inject('route', 'session', 'service:session');
  application.inject('controller:application', 'session', 'service:session');
}

export default {
  name: 'session-service',
  initialize: initialize
};
