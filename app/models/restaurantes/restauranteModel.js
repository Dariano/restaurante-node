const mongoose = require('mongoose');
const querystring = require('querystring');
const url = require('url');
const Schema = require('./schema-restaurante');
const Restaurante = mongoose.model('restaurante', Schema);

'use strict';
const create = require('./../actions/action-create')(Restaurante);
const find = require('./../actions/action-find')(Restaurante);
const findOne = require('./../actions/action-findOne')(Restaurante);
const update = require('./../actions/action-update')(Restaurante);
const remove = require('./../actions/action-remove')(Restaurante);

const repostory = {
	create,
	update,
	find,
	findOne,
	remove
};

module.exports = repostory;