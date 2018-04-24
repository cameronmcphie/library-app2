import Controller from '@ember/controller';
import {
  gte,
  and,
  not,
  match
} from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Coming Soon',

  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),
  actions: {
    saveMessage() {
      alert(`Saving the message is in progress`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
