export const up = (state = 0, action) => {
    switch (action.type) {
        case "up": {
            return {
                state: state + 1
            }
        }
        default: {
            return {
                state: state
            }
        }
    }
}