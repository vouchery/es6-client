/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
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
        define(['expect.js', '../../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.VoucheryApiReference);
    }
}(this, function(expect, VoucheryApiReference) {
    'use strict';

    var instance;

    beforeEach(function() {
        instance = new VoucheryApiReference.VouchersApi();
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

    describe('VouchersApi', function() {
        describe('batchGenerateVouchers', function() {
            it('should call batchGenerateVouchers successfully', function(done) {
                //uncomment below and update the code to test batchGenerateVouchers
                //instance.batchGenerateVouchers(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('createVoucher', function() {
            it('should call createVoucher successfully', function(done) {
                //uncomment below and update the code to test createVoucher
                //instance.createVoucher(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteVoucher', function() {
            it('should call deleteVoucher successfully', function(done) {
                //uncomment below and update the code to test deleteVoucher
                //instance.deleteVoucher(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('findVoucher', function() {
            it('should call findVoucher successfully', function(done) {
                //uncomment below and update the code to test findVoucher
                //instance.findVoucher(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getVoucher', function() {
            it('should call getVoucher successfully', function(done) {
                //uncomment below and update the code to test getVoucher
                //instance.getVoucher(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getVouchers', function() {
            it('should call getVouchers successfully', function(done) {
                //uncomment below and update the code to test getVouchers
                //instance.getVouchers(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('importVouchers', function() {
            it('should call importVouchers successfully', function(done) {
                //uncomment below and update the code to test importVouchers
                //instance.importVouchers(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateVoucher', function() {
            it('should call updateVoucher successfully', function(done) {
                //uncomment below and update the code to test updateVoucher
                //instance.updateVoucher(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));