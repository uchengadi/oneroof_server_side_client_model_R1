/*
 * File: app/model/ProductType.js
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

Ext.define('cobuy.model.ProductType', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'category_id',
            type: 'int'
        },
        {
            name: 'name'
        },
        {
            name: 'description'
        },
        {
            name: 'code'
        },
        {
            name: 'vat_rate',
            type: 'float'
        },
        {
            name: 'sales_tax_rate',
            type: 'float'
        },
        {
            name: 'icon'
        },
        {
            name: 'vat_rate_commencement_date',
            type: 'date'
        },
        {
            name: 'sales_tax_rate_commencement_date',
            type: 'date'
        },
        {
            name: 'is_available',
            type: 'boolean'
        },
        {
            name: 'is_paas',
            type: 'boolean'
        },
        {
            name: 'is_faas',
            type: 'boolean'
        },
        {
            name: 'monthly_paas_subscription_cost',
            type: 'float'
        },
        {
            name: 'minimum_quantity_for_paas_subscription',
            type: 'int'
        },
        {
            name: 'maximum_quantity_for_paas_subscription',
            type: 'int'
        },
        {
            name: 'minimum_paas_duration',
            type: 'int'
        },
        {
            name: 'maximum_paas_duration',
            type: 'int'
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