// Import Actions
import * as actions from '../actions';

export const mapDispatchToProps = (dispatch) => {
    return {
        // addStory: (newStory) => actions.addStory(dispatch, newStory),
        // hideMessage: () => actions.hideMessage(dispatch),
        // incrementCount: (storyId) => actions.incrementCount(dispatch, storyId),
        // decrementCount: (storyId) => actions.decrementCount(dispatch, storyId)
    }
}

export const mapStateToProps = (state) => {
    return {
        // stories: state.stories, 
        // success: state.success
    }
}