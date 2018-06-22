/*
 * File: app/model/Category.js
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

Ext.define('cobuy.model.Category', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'service_id'
        },
        {
            name: 'name'
        },
        {
            name: 'description'
        },
        {
            name: 'icon'
        },
        {
            name: 'create_time',
            type: 'date'
        },
        {
            name: 'create_user_id'
        },
        {
            name: 'update_time',
            type: 'date'
        },
        {
            name: 'update_user_id'
        },
        {
            name: 'is_available',
            type: 'boolean'
        },
        {
            name: 'display_types_on_store',
            type: 'boolean'
        },
        {
            name: 'is_faas',
            type: 'boolean'
        },
        {
            name: 'code',
            type: 'string'
        }
    ]
});