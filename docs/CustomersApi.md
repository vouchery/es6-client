# VoucheryApi.CustomersApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignVouchersToCustomer**](CustomersApi.md#assignVouchersToCustomer) | **PATCH** /customers/{identifier}/vouchers | Assign vouchers to a customer
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customers | Create a customer
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /customers/{identifier} | Delete a customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{identifier} | Get a customer
[**getCustomerRedemptions**](CustomersApi.md#getCustomerRedemptions) | **GET** /customers/{identifier}/redemptions | Get redemptions performed by a customer
[**getCustomerVouchers**](CustomersApi.md#getCustomerVouchers) | **GET** /customers/{identifier}/vouchers | Get vouchers assigned to a customer
[**getCustomers**](CustomersApi.md#getCustomers) | **GET** /customers | Get all customers
[**importCustomers**](CustomersApi.md#importCustomers) | **POST** /customers/import | Import your own customers
[**removeVouchersFromCustomer**](CustomersApi.md#removeVouchersFromCustomer) | **DELETE** /customers/{identifier}/vouchers | Remove (unassign) vouchers from a customer
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PATCH** /customers/{identifier} | Update a customer



## assignVouchersToCustomer

> Customer assignVouchersToCustomer(identifier, opts)

Assign vouchers to a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
let opts = {
  'inlineObject1': new VoucheryApi.InlineObject1() // InlineObject1 | 
};
apiInstance.assignVouchersToCustomer(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCustomer

> Customer createCustomer(opts)

Create a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let opts = {
  'customer': new VoucheryApi.Customer() // Customer | 
};
apiInstance.createCustomer(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomer

> deleteCustomer(identifier)

Delete a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
apiInstance.deleteCustomer(identifier).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomer

> Customer getCustomer(identifier)

Get a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
apiInstance.getCustomer(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 

### Return type

[**Customer**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerRedemptions

> [Redemption] getCustomerRedemptions(identifier)

Get redemptions performed by a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
apiInstance.getCustomerRedemptions(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 

### Return type

[**[Redemption]**](Redemption.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerVouchers

> [Voucher] getCustomerVouchers(identifier)

Get vouchers assigned to a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
apiInstance.getCustomerVouchers(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 

### Return type

[**[Voucher]**](Voucher.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomers

> [Customer] getCustomers()

Get all customers

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
apiInstance.getCustomers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Customer]**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importCustomers

> InlineResponse200 importCustomers(opts)

Import your own customers

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.importCustomers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## removeVouchersFromCustomer

> Customer removeVouchersFromCustomer(identifier, opts)

Remove (unassign) vouchers from a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
let opts = {
  'inlineObject': new VoucheryApi.InlineObject() // InlineObject | 
};
apiInstance.removeVouchersFromCustomer(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomer

> Customer updateCustomer(identifier, opts)

Update a customer

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CustomersApi();
let identifier = "identifier_example"; // String | Customer identifier
let opts = {
  'customer': new VoucheryApi.Customer() // Customer | 
};
apiInstance.updateCustomer(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Customer identifier | 
 **customer** | [**Customer**](Customer.md)|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

