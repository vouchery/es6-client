/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * Contact: hello@vouchery.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['expect.js', process.cwd() + '/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require(process.cwd() + '/src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.VoucheryApiReference);
    }
}(this, function(expect, VoucheryApiReference) {
    'use strict';

    var instance;

    beforeEach(function() {
        instance = new VoucheryApiReference.User();
    });

    var getProperty = function(object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        else
            return object[property];
    }

    var setProperty = function(object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    }

    describe('User', function() {
        it('should create an instance of User', function() {
            // uncomment below and update the code to test User
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be.a(VoucheryApiReference.User);
        });

        it('should have the property type (base name: "type")', function() {
            // uncomment below and update the code to test the property type
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property id (base name: "id")', function() {
            // uncomment below and update the code to test the property id
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property name (base name: "name")', function() {
            // uncomment below and update the code to test the property name
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property email (base name: "email")', function() {
            // uncomment below and update the code to test the property email
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property team (base name: "team")', function() {
            // uncomment below and update the code to test the property team
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property role (base name: "role")', function() {
            // uncomment below and update the code to test the property role
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property accessScope (base name: "access_scope")', function() {
            // uncomment below and update the code to test the property accessScope
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property active (base name: "active")', function() {
            // uncomment below and update the code to test the property active
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property createdAt (base name: "created_at")', function() {
            // uncomment below and update the code to test the property createdAt
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

        it('should have the property updatedAt (base name: "updated_at")', function() {
            // uncomment below and update the code to test the property updatedAt
            //var instane = new VoucheryApiReference.User();
            //expect(instance).to.be();
        });

    });

}));