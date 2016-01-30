var assert = require('assert');
var util = require('./util');

suite('Usuario do sistema', function(){
	suiteSetup(function(){
		// Executa todos os testes ANTES desse bloco.
	});
	
	suiteTeardown(function(){
		// Executa todos os testes DEPOIS desse bloco.
	});
	
	setup(function(){
		// Executa cada teste ANTES desse bloco.
	});
	
	teardown(function(){
		// Executa cada teste DEPOIS desse bloco.
	});
	
	test('deve somar o array [2,0]', function(){
		var soma = util.somaArray([2,0]);
		
		assert.equal(soma, 2);
	});
	// casos de testes
});