/*
 * File: app/model/OrderDelivery.js
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

Ext.define('cobuy.model.OrderDelivery', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'order_id'
        },
        {
            name: 'status'
        },
        {
            name: 'member_remark'
        },
        {
            name: 'order_delivered_by'
        },
        {
            name: 'date_of_delivery',
            type: 'date'
        },
        {
            name: 'delivery_confirmed_by'
        },
        {
            name: 'date_of_delivery_confirmation',
            type: 'date'
        }
    ]
});