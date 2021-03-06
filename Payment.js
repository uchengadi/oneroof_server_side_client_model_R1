/*
 * File: app/model/Payment.js
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

Ext.define('cobuy.model.Payment', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'status'
        },
        {
            name: 'payment_mode'
        },
        {
            name: 'invoice_number'
        },
        {
            name: 'order_id'
        },
        {
            name: 'bank_account_id'
        },
        {
            name: 'remark'
        },
        {
            name: 'delivery_charges',
            type: 'float'
        },
        {
            name: 'gross_amount',
            type: 'float'
        },
        {
            name: 'delivery_type'
        },
        {
            name: 'vat'
        },
        {
            name: 'revenue',
            type: 'float'
        },
        {
            name: 'payment_date',
            type: 'date'
        },
        {
            name: 'paid_by'
        },
        {
            name: 'payment_confirmed_by'
        },
        {
            name: 'date_of_confirmation',
            type: 'date'
        },
        {
            name: 'reason_for_failure'
        }
    ]
});