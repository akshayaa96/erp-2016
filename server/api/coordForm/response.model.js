'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ResponseSchema = new Schema({
	form: { type: Schema.Types.ObjectId, ref: 'CoordForm' },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	fileId: String,
	valid: Boolean,
	fields: [],
	createdOn: { type: Date	},
	updatedOn: { type: Date },
	comments: String,
	status: { 
		type: String,
		default: "Pending"
	}
});

module.exports = mongoose.model('Response', ResponseSchema);