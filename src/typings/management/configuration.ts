/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Currency } from './currency';

export class Configuration {
    /**
    * Payment method, like **eftpos_australia** or **mc**. See the [possible values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). 
    */
    'brand': string;
    /**
    * Currency, and surcharge percentage or amount.
    */
    'currencies': Array<Currency>;
    /**
    * Funding source. Possible values: * **Credit** * **Debit**
    */
    'sources'?: Configuration.SourcesEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<Currency>"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Configuration.SourcesEnum"
        }    ];

    static getAttributeTypeMap() {
        return Configuration.attributeTypeMap;
    }
}

export namespace Configuration {
    export enum SourcesEnum {
    }
}
