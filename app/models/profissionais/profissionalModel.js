const mongoose = require('mongoose');
const querystring = require('querystring');
const url = require('url');
const Schema = require('./schema-profissional');
const Profissinal = mongoose.model('profissional', Schema);

'use strict';

const create = require('./../actions/action-create')(Profissinal);
const find = require('./../actions/action-find')(Profissinal);
const findOne = require('./../actions/action-findOne')(Profissinal);
const update = require('./../actions/action-update')(Profissinal);
const remove = require('./../actions/action-remove')(Profissinal);

const repostory = {
	create,
	update,
	find,
	findOne,
	remove
};

module.exports = repostory;