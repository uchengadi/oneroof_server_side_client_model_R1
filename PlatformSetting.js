/*
 * File: app/model/PlatformSetting.js
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

Ext.define('cobuy.model.PlatformSetting', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'platform_default_currency_id'
        },
        {
            name: 'platform_default_time_zone_id'
        },
        {
            name: 'managemenr_fee_in_percetanges'
        },
        {
            name: 'handling_charges_in_percetanges'
        },
        {
            name: 'shipping_charges_in_percetanges'
        },
        {
            name: 'include_management_fees',
            type: 'boolean'
        },
        {
            name: 'include_handling_charges',
            type: 'boolean'
        },
        {
            name: 'include_shipping_charges',
            type: 'boolean'
        },
        {
            name: 'effect_discount_for_subscription',
            type: 'boolean'
        },
        {
            name: 'min_years_required_for_discount',
            type: 'int'
        },
        {
            name: 'min_months_required_for_discount',
            type: 'int'
        },
        {
            name: 'discount_rate',
            type: 'float'
        },
        {
            name: 'monthly_discount_rate',
            type: 'float'
        },
        {
            name: 'top_priority_delivery_in_percentage',
            type: 'float'
        },
        {
            name: 'priority_delivery_in_percentage',
            type: 'float'
        },
        {
            name: 'standard_delivery_in_percentage',
            type: 'float'
        },
        {
            name: 'minimum_top_priority_delivery_amount',
            type: 'float'
        },
        {
            name: 'minimum_priority_delivery_amount',
            type: 'float'
        },
        {
            name: 'minimum_standard_delivery_amount',
            type: 'float'
        },
        {
            name: 'icon_height'
        },
        {
            name: 'icon_width'
        },
        {
            name: 'icon_mime_type'
        },
        {
            name: 'poster_height'
        },
        {
            name: 'poster_width'
        },
        {
            name: 'poster_mime_type'
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
        },
        {
            name: 'escrow_minimum_amount',
            type: 'float'
        },
        {
            name: 'escrow_rate_in_percentages',
            type: 'float'
        },
        {
            name: 'maximum_allowable_cash_transaction',
            type: 'float'
        },
        {
            name: 'business_subscription_daily_quotation_limit',
            type: 'float'
        },
        {
            name: 'business_prime_subscription_daily_quotation_limit',
            type: 'float'
        },
        {
            name: 'basic_prime_subscription_daily_quotation_limit',
            type: 'float'
        },
        {
            name: 'business_subscription_monthly_quotation_limit',
            type: 'float'
        },
        {
            name: 'business_prime_subscription_monthly_quotation_limit',
            type: 'float'
        },
        {
            name: 'basic_prime_subscription_monthly_quotation_limit',
            type: 'float'
        },
        {
            name: 'product_maximum_video_size',
            type: 'float'
        },
        {
            name: 'product_code_pad_length',
            type: 'int'
        }
    ]
});