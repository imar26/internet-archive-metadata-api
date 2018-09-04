// Import Constants
import * as constants from '../constants';

const rootReducer = (state = {
    stories: [],
    success: false
}, action) => {
    switch (action.type) {
        // Add story to the list
        case constants.ADD_STORY:
            return {
                stories: [
                    ...state.stories,
                    action.story
                ],
                success: true
            }
        // Show success message on adding story to the list
        case constants.HIDE_MESSAGE:
            return {stories: state.stories, success: false}
        // Increment vote count value
        case constants.INCREMENT:
            return {
                stories: state
                    .stories
                    .filter((story) => {
                        if (story.id === action.id) {
                            story.count += 1;
                        }
                        return true;
                    })
            }
        // Decrement vote count value
        case constants.DECREMENT:
            return {
                stories: state
                    .stories
                    .filter((story) => {
                        if (story.id === action.id) {
                            story.count -= 1;
                        }
                        return true;
                    })
            }
        default:
            return state;
    }
}

// Export RootReducer
export default rootReducer;