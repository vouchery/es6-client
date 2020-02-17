# VoucheryApi.VouchersApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchGenerateVouchers**](VouchersApi.md#batchGenerateVouchers) | **POST** /campaigns/{id}/vouchers/batch | Batch create vouchers
[**createVoucher**](VouchersApi.md#createVoucher) | **POST** /campaigns/{campaign_id}/vouchers | Create a voucher
[**deleteVoucher**](VouchersApi.md#deleteVoucher) | **DELETE** /vouchers/{code} | Delete a voucher
[**expireVouchers**](VouchersApi.md#expireVouchers) | **POST** /campaigns/vouchers/expire | Expire a list of vouchers
[**findVoucher**](VouchersApi.md#findVoucher) | **GET** /vouchers/find | Find a voucher by campaign metadata
[**getVoucher**](VouchersApi.md#getVoucher) | **GET** /vouchers/{code} | Get a voucher
[**getVouchers**](VouchersApi.md#getVouchers) | **GET** /campaigns/{campaign_id}/vouchers | Get all vouchers for a campaign
[**importVouchers**](VouchersApi.md#importVouchers) | **POST** /campaigns/{id}/vouchers/import | Import your own vouchers
[**updateVoucher**](VouchersApi.md#updateVoucher) | **PATCH** /vouchers/{code} | Update a voucher



## batchGenerateVouchers

> [Voucher] batchGenerateVouchers(id, opts)

Batch create vouchers

 &lt;p&gt;Generate a batch of unique vouchers. Each voucher will be created using &lt;code&gt;{prefix}-{random code}&lt;/code&gt; format where code will be a random string of requested type and length. &lt;strong&gt;A prefix needs to be unique within a project.&lt;/strong&gt;&lt;/p&gt; &lt;p&gt; Following code types are supported: &lt;ul&gt; &lt;li&gt;digits&lt;/li&gt; &lt;li&gt;letters&lt;/li&gt; &lt;li&gt;mixed (digits and letters)&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; &lt;p&gt;Allowed characters for each code type have been filtered to avoid typing mistakes. Maximum number of codes possible to generate in one batch request is 50 000.&lt;/p&gt;

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let id = 56; // Number | Campaign ID
let opts = {
  'batch': new VoucheryApi.Batch() // Batch | 
};
apiInstance.batchGenerateVouchers(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 
 **batch** | [**Batch**](Batch.md)|  | [optional] 

### Return type

[**[Voucher]**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVoucher

> Voucher createVoucher(campaignId, opts)

Create a voucher

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'voucher': new VoucheryApi.Voucher() // Voucher | 
};
apiInstance.createVoucher(campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 
 **voucher** | [**Voucher**](Voucher.md)|  | [optional] 

### Return type

[**Voucher**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVoucher

> deleteVoucher(code)

Delete a voucher

Delete a single voucher. Vouchers with at least one confirmed redemption can not be deleted.

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let code = "code_example"; // String | Voucher code
apiInstance.deleteVoucher(code).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## expireVouchers

> expireVouchers(opts)

Expire a list of vouchers

Given a list of voucher codes, change their status to expired, unless they have been redeemed.

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let opts = {
  'inlineObject4': new VoucheryApi.InlineObject4() // InlineObject4 | 
};
apiInstance.expireVouchers(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## findVoucher

> Voucher findVoucher(opts)

Find a voucher by campaign metadata

&lt;p&gt;Find voucher by campaign metadata.&lt;/p&gt; &lt;p&gt;   Optionally assign found voucher to a customer by passing customer_identifier param.   All vouchers for a customer can be fetched at &lt;a href&#x3D;\&quot;#get_customers-identifier-vouchers\&quot;&gt;/customers/{id}/vouchers&lt;/a&gt;. &lt;/p&gt; &lt;p&gt;If no voucher is available this endpoint will return an empty response and HTTP code &lt;code&gt;204 No content&lt;/code&gt;&lt;/p&gt; &lt;p&gt;At least one metadata must be provided, otherwise no voucher will be returned.&lt;/p&gt; 

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let opts = {
  'medium': ["null"], // [String] | 
  'purpose': ["null"], // [String] | 
  'team': ["null"], // [String] | 
  'channel': ["null"], // [String] | 
  'customerIdentifier': "customerIdentifier_example" // String | \"Assign found voucher to a customer with this identifier. Will create customer if not present. Optional.\"
};
apiInstance.findVoucher(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **medium** | [**[String]**](String.md)|  | [optional] 
 **purpose** | [**[String]**](String.md)|  | [optional] 
 **team** | [**[String]**](String.md)|  | [optional] 
 **channel** | [**[String]**](String.md)|  | [optional] 
 **customerIdentifier** | **String**| \&quot;Assign found voucher to a customer with this identifier. Will create customer if not present. Optional.\&quot; | [optional] 

### Return type

[**Voucher**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoucher

> Voucher getVoucher(code)

Get a voucher

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let code = "code_example"; // String | Voucher code
apiInstance.getVoucher(code).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 

### Return type

[**Voucher**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVouchers

> [Voucher] getVouchers(campaignId)

Get all vouchers for a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getVouchers(campaignId).then((data) => {
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

[**[Voucher]**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importVouchers

> InlineResponse200 importVouchers(id, opts)

Import your own vouchers

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let id = 56; // Number | Campaign ID
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.importVouchers(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 
 **file** | **File**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateVoucher

> Voucher updateVoucher(code, opts)

Update a voucher

Only voucher status can be updated.

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.VouchersApi();
let code = "code_example"; // String | Voucher code
let opts = {
  'voucher': new VoucheryApi.Voucher() // Voucher | 
};
apiInstance.updateVoucher(code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Voucher code | 
 **voucher** | [**Voucher**](Voucher.md)|  | [optional] 

### Return type

[**Voucher**](Voucher.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

