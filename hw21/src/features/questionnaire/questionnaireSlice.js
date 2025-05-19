import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        addAnswer: (store, { payload }) => {
            const element = store.quiz.find(
                item => item.id === payload.id)
            if (element) {
                element.isSelected = payload.index
            }
        },
        addResult: (store) => {
            store.score = store.quiz.reduce((accum, el) => {
                return el.isSelected === el.result ? accum + 1 : accum;
            }, 0)
            store.isSubmitted = true;
        },
        setValidationErrors: (store) => {
            store.quiz.forEach(q => {
                q.hasError = q.isSelected === null;
            });
        },
        resetQuestionnaire: (store) => {
            store.quiz = initialState.quiz;
            store.score = 0;
            store.isSubmitted = false;
        }


    }
})

export const { addAnswer, addResult, setValidationErrors, resetQuestionnaire } = questionnaireSlice.actions

export default questionnaireSlice.reducer