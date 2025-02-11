/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Terminal {
    /**
    * The [assignment status](https://docs.adyen.com/point-of-sale/automating-terminal-management/assign-terminals-api) of the terminal. If true, the terminal is assigned. If false, the terminal is in inventory and can\'t be boarded.
    */
    'assigned'?: boolean;
    /**
    * The Bluetooth IP address of the terminal.
    */
    'bluetoothIp'?: string;
    /**
    * The Bluetooth MAC address of the terminal.
    */
    'bluetoothMac'?: string;
    /**
    * The city where the terminal is located.
    */
    'city'?: string;
    /**
    * The company account of the terminal.
    */
    'companyAccount'?: string;
    /**
    * The country code where the terminal is located.
    */
    'countryCode'?: string;
    /**
    * The terminal model of the device.
    */
    'deviceModel'?: string;
    /**
    * The ethernet IP address of the terminal.
    */
    'ethernetIp'?: string;
    /**
    * The ethernet MAC address of the terminal.
    */
    'ethernetMac'?: string;
    /**
    * The firmware Version of the terminal.
    */
    'firmwareVersion'?: string;
    /**
    * The ICCID number of the cellular communications card.
    */
    'iccid'?: string;
    /**
    * The unique identifier of the terminal.
    */
    'id'?: string;
    /**
    * The last Activity Date and Time of the terminal.
    */
    'lastActivityDateTime'?: Date;
    /**
    * The last Transaction Date and Time of the terminal.
    */
    'lastTransactionDateTime'?: Date;
    /**
    * The ethernet link speed of the terminal that was negotiated.
    */
    'linkNegotiation'?: string;
    /**
    * The serial number of the terminal.
    */
    'serialNumber'?: string;
    /**
    * On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the terminal: ACTIVE or INVENTORY.
    */
    'simStatus'?: string;
    /**
    * Indicates when the terminal was last online, whether the terminal is being reassigned, or whether the terminal is turned off. If the terminal was last online more that a week ago, it is also shown as turned off.
    */
    'status'?: string;
    /**
    * The Status of store where the terminal is located.
    */
    'storeStatus'?: string;
    /**
    * The WiFi IP address of the terminal.
    */
    'wifiIp'?: string;
    /**
    * The WiFi MAC address of the terminal.
    */
    'wifiMac'?: string;
    /**
    * The WIFI SSID of the terminal.
    */
    'wifiSsid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assigned",
            "baseName": "assigned",
            "type": "boolean"
        },
        {
            "name": "bluetoothIp",
            "baseName": "bluetoothIp",
            "type": "string"
        },
        {
            "name": "bluetoothMac",
            "baseName": "bluetoothMac",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "companyAccount",
            "baseName": "companyAccount",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "deviceModel",
            "baseName": "deviceModel",
            "type": "string"
        },
        {
            "name": "ethernetIp",
            "baseName": "ethernetIp",
            "type": "string"
        },
        {
            "name": "ethernetMac",
            "baseName": "ethernetMac",
            "type": "string"
        },
        {
            "name": "firmwareVersion",
            "baseName": "firmwareVersion",
            "type": "string"
        },
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastActivityDateTime",
            "baseName": "lastActivityDateTime",
            "type": "Date"
        },
        {
            "name": "lastTransactionDateTime",
            "baseName": "lastTransactionDateTime",
            "type": "Date"
        },
        {
            "name": "linkNegotiation",
            "baseName": "linkNegotiation",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        },
        {
            "name": "simStatus",
            "baseName": "simStatus",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "storeStatus",
            "baseName": "storeStatus",
            "type": "string"
        },
        {
            "name": "wifiIp",
            "baseName": "wifiIp",
            "type": "string"
        },
        {
            "name": "wifiMac",
            "baseName": "wifiMac",
            "type": "string"
        },
        {
            "name": "wifiSsid",
            "baseName": "wifiSsid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Terminal.attributeTypeMap;
    }
}

