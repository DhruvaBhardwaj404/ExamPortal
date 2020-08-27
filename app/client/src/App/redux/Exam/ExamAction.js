
import {EXAM_QUESTIONS,EXAM_ANSWERS,EXAM_ATTEMPTS,EXAM_CURRENT} from './ExamType.js'


export const setQuestions=(data)=>{
    return {
        type:EXAM_QUESTIONS,
        payload:data
    }
}

export const setAnswers=(data)=>{
    return {
        type:EXAM_ANSWERS,
        payload:data
    }
}

export const setAttempts=(data)=>{
    return {
        type:EXAM_ATTEMPTS,
        payload:data
    }
}
export const setCurrent=(data)=>{
    return {
        type:EXAM_CURRENT,
        payload:data
    }
}