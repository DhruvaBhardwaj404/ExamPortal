
import {EXAM_QUESTIONS,EXAM_ANSWERS,EXAM_ATTEMPTS,EXAM_CURRENT} from './ExamType.js'


const initial_state={
    questions:[{}],
    answers:[],
    attempts:[],
    current:0
}

 const examReducer= (state=initial_state,action)=>{
    switch(action.type){
        case EXAM_QUESTIONS:{ 
                           state.questions=action.payload
                        return{
                           questions:state.questions,
                           answers:state.answers,
                           attempts:state.attempts,
                           current:state.current
                        }}
        case EXAM_ANSWERS:{ 
                           state.answers=action.payload
                        return{
                            questions:state.questions,
                           answers:state.answers,
                           attempts:state.attempts,
                           current:state.current
                        }}                
        case EXAM_ATTEMPTS:{ 
                          state.attempts=action.payload
                        return{
                            questions:state.questions,
                            answers:state.answers,
                            attempts:state.attempts,
                            current:state.current
                        }}
        case EXAM_CURRENT:{ 
                            state.current=action.payload
                          return{
                              questions:state.questions,
                              answers:state.answers,
                              attempts:state.attempts,
                              current:state.current
                          }}                
        default : return state
    }
}

export default examReducer;