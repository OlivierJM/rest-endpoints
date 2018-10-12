import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/mrest:restivus';
import * as data from '../data.json';

const Api = new Restivus({
  useDefaultAuth: false,
  prettyJson: true,
});

Api.addRoute(
    'data',
    { authRequired: false },
    // here you can decide if you want the endpoint to be authenticated with meteor users
    {
      get: {
        action: function() {
          if (data) {
            return { status: 'success', data };
          }
          return {
            statusCode: 400,
            body: { status: 'fail', message: "Error happened, I couldn't fetch the data" },
          };
        },
      },
    },
  );