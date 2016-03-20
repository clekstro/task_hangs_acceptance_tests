import { test } from 'qunit';
import moduleForAcceptance from 'task-hangs-acceptance-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | task hangs');

test('task hangs test', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
