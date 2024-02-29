const connectDB = require('./DB/connect')
const uri = require('./DB/connect')
const Course = require('./model/model')
const CourseJson = require('./course.json') 

const start = async () => {
try {
    await connectDB(uri)
    await Course.create(CourseJson)
    await Course.deleteMany();
    console.log('success')
} catch (error) {
    console.log(error);
}
}




start();