import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Links = new Mongo.Collection('links')

const links = [
    {
      title:'Discussions',
      link:'https://forums.meteor.com'
    },
    {
      title:'Read the Docs',
      link:  'https://docs.meteor.com'
    },
    {
      title:'Follow the Guide',
      link:'http://guide.meteor.com'
    },
    {
      title:'Do the Tutorial',
      link:'https://www.meteor.com/tutorials/react/creating-an-app'
    }
  
  ]

// Note this keeps adding everytime the server restarts
Meteor.startup(() => {
    links.forEach(link => {
        Links.insert(link)
    });
})