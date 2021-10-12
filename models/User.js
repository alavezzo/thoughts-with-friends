const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: 'This username is taken!',
            required: 'Please provide a username!',
            trim: true
        },
        email: {
            type: String,
            unique: 'There is already an account associated with this email. Please sign in!',
            required: 'Please provide a username',
            lowercase: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
