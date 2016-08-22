//This file is used to create methods on server side that can be subscribed on client side
//To access users data from database or any other methods which are not to be exposed on client side
Meteor.methods({
    addResolution:function(resolutionText){
        check(resolutionText, String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.insert({
            text: resolutionText,
            complete: false,
            createdAt: new Date(),
            user: Meteor.userId()
        });
    },
    toggleResolution:function(resolution){
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.update(resolution._id, {
            $set: {complete: !resolution.complete}
        });
    },
    deleteResolution:function(resolution){
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.remove(resolution._id);
    }
});
