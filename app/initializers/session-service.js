export function initialize(container, application) {
  application.inject('route', 'session', 'service:session');
  application.inject('controller:application', 'session', 'service:session');

  application.register('service:session-check', function beforeModel(transition) {
    var isLoggedIn = this.session.get('isLoggedIn');
    if (!isLoggedIn) {
      this.session.set('attemptedTransition', transition);
      this.transitionTo('login');
    }
  }, { instantiate: false });
  ['track', 'track/new'].forEach((route) => {
    application.inject('route:' + route, 'beforeModel', 'service:session-check');
  });
}

export default {
  name: 'session-service',
  initialize: initialize
};
