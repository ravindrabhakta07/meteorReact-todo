import React, {Component} from 'react';

export default class ResolutionSingle extends Component {

    toggleChecked() {
        Meteor.call("toggleResolution", this.props.resolution, (error, data)=> {
            if(error){
                Bert.alert({
                    //title: 'Now Playing',
                    message: 'You are not authorized to update this resolution.',
                    type: 'danger',
                    style: 'fixed-top',
                    icon: 'fa-frown-o'
                });
            }else{
                Bert.alert({
                    //title: 'Now Playing',
                    message: 'Resolution updated successfully.',
                    type: 'success',
                    style: 'growl-top-right',
                    icon: 'fa-smile-o'
                });
            }
        });
    }

    deleteResolution() {
        Meteor.call("deleteResolution", this.props.resolution, (error, data)=> {
            if(error){
                Bert.alert({
                    //title: 'Now Playing',
                    message: 'You are not authorized to delete this resolution.',
                    type: 'danger',
                    style: 'fixed-top',
                    icon: 'fa-frown-o'
                });
            }else{
                Bert.alert({
                    //title: 'Now Playing',
                    message: 'Resolution deleted successfully.',
                    type: 'success',
                    style: 'fixed-top',
                    icon: 'fa-smile-o'
                });
            }
        });
    }

    render() {
        const resolutionClass = this.props.resolution.complete ? "checked" : "";
        const status = this.props.resolution.complete ? <span className="completed">Completed</span>  : "";

        return (
            <li className= {resolutionClass} >
                <input type="checkbox" readOnly={true}
                    checked={this.props.resolution.complete}
                    onClick={this.toggleChecked.bind(this)}/>
                <a href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
                {status}
                <button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>&times;</button>
            </li>
        )
    }
}
