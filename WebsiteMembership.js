/*
 * File: app/model/WebsiteMembership.js
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

Ext.define('cobuy.model.WebsiteMembership', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'introduction'
        },
        {
            name: 'membership_basic'
        },
        {
            name: 'membership_business'
        },
        {
            name: 'membership_dons'
        },
        {
            name: 'membership_business_prime'
        },
        {
            name: 'membership_basic_prime'
        },
        {
            name: 'status'
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
            name: 'create_user_id'
        },
        {
            name: 'update_user_id'
        }
    ]
});