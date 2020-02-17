# VoucheryApi.RedemptionsApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmRedemption**](RedemptionsApi.md#confirmRedemption) | **PATCH** /vouchers/{code}/redemptions | Confirm a redemption
[**createRedemption**](RedemptionsApi.md#createRedemption) | **POST** /vouchers/{code}/redemptions | Create a redemption
[**deleteRedemption**](RedemptionsApi.md#deleteRedemption) | **DELETE** /vouchers/{code}/redemptions | Delete a redemption
[**getRedemption**](RedemptionsApi.md#getRedemption) | **GET** /vouchers/{code}/redemptions | Get a redemption
[**getRedemptions**](RedemptionsApi.md#getRedemptions) | **GET** /campaigns/{campaign_id}/redemptions | Get all redemptions for a campaign



## confirmRedemption

> Redemption confirmRedemption(code, transactionId)

Confirm a redemption

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RedemptionsApi();
let code = "code_example"; // String | Voucher code
let transactionId = "transactionId_example"; // String | ID which identifies the transaction in customer system, e.g. order number, invoice number
apiInstance.confirmRedemption(code, transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 
 **transactionId** | **String**| ID which identifies the transaction in customer system, e.g. order number, invoice number | 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createRedemption

> Redemption createRedemption(code, opts)

Create a redemption

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RedemptionsApi();
let code = "code_example"; // String | Voucher code
let opts = {
  'redemption': new VoucheryApi.Redemption() // Redemption | 
};
apiInstance.createRedemption(code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 
 **redemption** | [**Redemption**](Redemption.md)|  | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRedemption

> deleteRedemption(code, transactionId)

Delete a redemption

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RedemptionsApi();
let code = "code_example"; // String | Voucher code
let transactionId = "transactionId_example"; // String | ID which identifies the transaction in customer system, e.g. order number, invoice number
apiInstance.deleteRedemption(code, transactionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 
 **transactionId** | **String**| ID which identifies the transaction in customer system, e.g. order number, invoice number | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRedemption

> Redemption getRedemption(code, transactionId)

Get a redemption

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RedemptionsApi();
let code = "code_example"; // String | Voucher code
let transactionId = "transactionId_example"; // String | ID which identifies the transaction in customer system, e.g. order number, invoice number
apiInstance.getRedemption(code, transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 
 **transactionId** | **String**| ID which identifies the transaction in customer system, e.g. order number, invoice number | 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedemptions

> [Redemption] getRedemptions(campaignId)

Get all redemptions for a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RedemptionsApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getRedemptions(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 

### Return type

[**[Redemption]**](Redemption.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

