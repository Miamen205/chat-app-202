import actionTypes from './actionTypes';

export const fetchCalendar = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.FETCH_CALENDAR:
            return {
                ...state,
                    calendar:{
                    selectedDay: action.selectedDay,
                    selectedWeekday: action.selectedWeekday,
                    selectedExercise: action.selectedExercise,
                    benchTemplate: action.benchTemplate,
                    deadliftTemplate: action.deadliftTemplate,
                    ohpTemplate: action.ohpTemplate,
                    squatTemplate: action.squatTemplate,
                    date: action.date
                    }
            };
        case actionTypes.SET_TEMPLATE:
            return {
                ...state,
                templates: {
                    squatTemplate: action.squat,
                    deadliftTemplate: action.deadlift,
                    benchTemplate: action.bench,
                    overheadPressTemplate: action.ohp
                }
                }
            default:
                return state;
    }
}