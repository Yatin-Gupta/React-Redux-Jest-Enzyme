import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostActionCreator} from '../redux/actions/postsActionCreator';
import Button from '../ClickableButton/Button';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postBtnMsg:'Show Posts'
        };
        this.updatePostBtnMsg = this.updatePostBtnMsg.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Button onClick={(evt) => {
                        this.props.getPosts();
                        this.updatePostBtnMsg('Hide Posts');
                    }}>
                        {this.state.postBtnMsg}
                    </Button>
                </div>
                <div>
                    {this.props.posts.map((post) => (<h4 key={post.id}>{post.title}</h4>))}
                </div>
            </React.Fragment>
        );
    }

    updatePostBtnMsg(msg) {
        this.setState({postBtnMsg:msg});
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts:() => {
            dispatch(getPostActionCreator());
        }
    }
}

const mapStateToProps = (store) => {
    return {
        posts:store.posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
