const { Schema, model } = require('mongoose');
const dateFormat = '../utils/dateFormat'

const reactionSchema = new Schema(

)
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter your thought!',
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username:{
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = new model('Thought', ThoughtSchema);

module.exports = Thought;
