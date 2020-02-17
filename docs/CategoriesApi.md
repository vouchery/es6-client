# VoucheryApi.CategoriesApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /categories | Create a category
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /categories/{id} | Delete a category
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /categories | Get all categories for a campaign
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /categories/{id} | Get a category
[**updateCategory**](CategoriesApi.md#updateCategory) | **PATCH** /categories/{id} | Update a category



## createCategory

> Category createCategory(opts)

Create a category

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.CategoriesApi();
let opts = {
  'category': new VoucheryApi.Category() // Category | 
};
apiInstance.createCategory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCategory

> deleteCategory(id)

Delete a category

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.CategoriesApi();
let id = 56; // Number | Category ID
apiInstance.deleteCategory(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category ID | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCategories

> [Category] getCategories()

Get all categories for a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.CategoriesApi();
apiInstance.getCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategory

> Category getCategory(id)

Get a category

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.CategoriesApi();
let id = 56; // Number | Category ID
apiInstance.getCategory(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category ID | 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCategory

> Category updateCategory(id, opts)

Update a category

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.CategoriesApi();
let id = 56; // Number | Category ID
let opts = {
  'category': new VoucheryApi.Category() // Category | 
};
apiInstance.updateCategory(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category ID | 
 **category** | [**Category**](Category.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

