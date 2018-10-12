import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'
import * as data from '../data.json'

const url = 'http://localhost:3000/linked'


// then you can call this from the client
Meteor.methods({
    createStuff: () => {
        HTTP.call('POST', url, {
            data: { data }
          }, (error, result) => {
            if (!error) {
              console.log('successfully posted');
            }
          });
    }
})