'use strict';

describe('uploadVideos', function(){
    var controller;
    var myScope;
    beforeEach(angular.mock.module('uploadApp'));

    beforeEach(inject(function ($compile, $rootScope, $componentController) {
        myScope = $rootScope.$new();
        controller = $componentController('uploadVideos', {$scope: myScope});
    }));

    describe('uploaderController', function(){
        it('component controller should be defined', function() {
            expect(controller).toBeDefined();
        });
        it('component controller scope should be defined', function() {
            expect(myScope).toBeDefined();
        });
        it('should have empty message at start', function () {
            expect(myScope.message).toBe('');
        });
        it('should have a modified message', function () {
            myScope.message = 'my new message';
            expect(myScope.message).toBe('my new message');
        });
        it('should have a scope cssprogress object set', function () {
            expect(myScope.cssprogress).toBeDefined();
        });
        it('should have a scope cssprogress width set', function () {
            expect(myScope.cssprogress.width).toBeDefined();
        });
        it('should have a scope cssprogress width value set', function () {
            expect(myScope.cssprogress.width).toEqual('0%');
        });
        it('should have a scope cssprogress background set', function () {
            expect(myScope.cssprogress.background).toBeDefined();
        });
        it('should have a scope cssprogress background value set', function () {
            expect(myScope.cssprogress.background).toEqual('#ff7400');
        });
    });
});