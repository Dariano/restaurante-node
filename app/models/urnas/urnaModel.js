const mongoose = require('mongoose');
const Schema = require('./schema-urna');
const Urna = mongoose.model('urna', Schema);

'use strict';

const votar = require('./../actions/action-create')(Urna);

const actions = {
	votar
};

module.exports = actions;