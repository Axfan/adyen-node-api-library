/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Redirect } from './redirect';

export class CheckoutOneTimePasscodeAction {
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    'redirect'?: Redirect;
    /**
    * The interval in second between OTP resend.
    */
    'resendInterval'?: number;
    /**
    * The maximum number of OTP resend attempts.
    */
    'resendMaxAttempts'?: number;
    /**
    * The URL, to which you make POST request to trigger OTP resend.
    */
    'resendUrl'?: string;
    /**
    * The type of the action.
    */
    'type': CheckoutOneTimePasscodeAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "Redirect"
        },
        {
            "name": "resendInterval",
            "baseName": "resendInterval",
            "type": "number"
        },
        {
            "name": "resendMaxAttempts",
            "baseName": "resendMaxAttempts",
            "type": "number"
        },
        {
            "name": "resendUrl",
            "baseName": "resendUrl",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutOneTimePasscodeAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutOneTimePasscodeAction.attributeTypeMap;
    }
}

export namespace CheckoutOneTimePasscodeAction {
    export enum TypeEnum {
        OneTimePasscode = <any> 'oneTimePasscode'
    }
}
