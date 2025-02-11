/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MobilePayDetails {
    /**
    * **mobilepay**
    */
    'type'?: MobilePayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MobilePayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MobilePayDetails.attributeTypeMap;
    }
}

export namespace MobilePayDetails {
    export enum TypeEnum {
        Mobilepay = <any> 'mobilepay'
    }
}
