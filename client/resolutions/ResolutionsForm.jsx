import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

    addResolution(event) {
        event.preventDefault();
        let text = this.refs.resolution.value.trim();
        if (text) {
            Meteor.call('addResolution', text, (error, data) => {
                if (error) {
                    //Bert.alert("Please login before submitting", "danger", "fixed-top", "fa-frown-o");
                    Bert.alert({
                        //title: 'Now Playing',
                        message: 'Please login before submitting',
                        type: 'danger',
                        style: 'fixed-top',
                        icon: 'fa-frown-o'
                    });
                } else {
                    this.refs.resolution.value = "";
                    Bert.alert({
                        //title: 'Now Playing',
                        message: 'Resolution added successfully',
                        type: 'success',
                        style: 'growl-top-right',
                        icon: 'fa-smile-o'
                    });
                }
            });
        }
    }

    render() {
        return (
            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                <input type="text" ref="resolution" placeholder="Add a resolution"></input>
            </form>
        )
    }
}
