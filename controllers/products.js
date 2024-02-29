const Course = require('../model/model')

const getAllTopics = async (req, res) => {
    const { topic, title } = req.query
    const queryObject = {};

    if(topic) {
        queryObject.topic = topic
        console.log(queryObject.topic);
    }
    if(title) {
        queryObject.title = title
    }

    const myData = await Course.find(queryObject)
    res.status(200).json({ myData })
}

const getAllTopicsTesting = async (req, res) => {
    const myData = await Course.find(req.query)
    res.status(200).json({ myData })
}

module.exports = { getAllTopics, getAllTopicsTesting }