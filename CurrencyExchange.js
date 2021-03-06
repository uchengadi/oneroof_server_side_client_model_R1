/*
 * File: app/model/CurrencyExchange.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('cobuy.model.CurrencyExchange', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'base_currency_id'
        },
        {
            name: 'currency_id'
        },
        {
            name: 'exchange_rate'
        },
        {
            name: 'create_time',
            type: 'date'
        },
        {
            name: 'update_time',
            type: 'date'
        },
        {
            name: 'created_by'
        },
        {
            name: 'updated_by'
        }
    ]
});