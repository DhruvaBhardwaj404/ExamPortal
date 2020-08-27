
const ExamList={
    name:"Maths",
    list:[{   
        ExamID:"Test1",
        Desc:"This is a Test1 to test the exam portal"
        },
        {
        ExamID:"Test2",
        Desc:"This is a Test2 to test the exam portal"
        }]
}


const Exam=[{
    ExamID:"Test",
    Desc:"This is a test to test the exam portal",
    Question:[{question:`The probability of getting exactly one head in tossing a pair of coins is`
                ,options:["0", "1", "1/3", "1/2"]},
    {question:"The total number of events of throwing 10 coins simultaneously is",
                options:["1024","512","100","10"]},
    {question:" The value of cos 0°. cos 1°. cos 2°. cos 3°… cos 89° cos 90° is",
                 options:["1","-1","0","1/2"]},
    {question:"If x and y are complementary angles, then",
                 options:[" sin x = sin y ","tan x = tan y","cos x = cos y","sec x = cosec y"]},
    {question:"The distance of the point P(2, 3) from the x-axis is",
                 options:["2","3","1","5"]},

    ],
    Answer:[4,1,3,4,2]
},
{
    ExamID:"Test2",
    Desc:"This is a test to test the exam portal",
    
    Question:[{question:`The probability of getting exactly one head in tossing a pair of coins is`
                ,options:["0", "1", "1/3", "1/2"]},
    {question:" The value of cos 0°. cos 1°. cos 2°. cos 3°… cos 89° cos 90° is",
                 options:["1","-1","0","1/2"]},
    {question:"The total number of events of throwing 10 coins simultaneously is",
                options:["1024","512","100","10"]},
    {question:"If x and y are complementary angles, then",
                 options:[" sin x = sin y ","tan x = tan y","cos x = cos y","sec x = cosec y"]},
    {question:"The distance of the point P(2, 3) from the x-axis is",
                 options:["2","3","1","5"]},

    ],
    Answer:[4,3,1,4,2]
}

]
db.ExamList.remove({});
db.Exams.remove({});
db.ExamList.insert(ExamList);
db.Exams.insert(Exam);