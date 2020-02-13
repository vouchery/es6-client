# VoucheryApiReference.CategoryRulesApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryRule**](CategoryRulesApi.md#createCategoryRule) | **POST** /campaigns/{campaign_id}/category_rules | Create a category rule
[**deleteCategoryRule**](CategoryRulesApi.md#deleteCategoryRule) | **DELETE** /category_rules/{id} | Delete a category rule
[**getCategoryRule**](CategoryRulesApi.md#getCategoryRule) | **GET** /category_rules/{id} | Get a category rule
[**getCategoryRules**](CategoryRulesApi.md#getCategoryRules) | **GET** /campaigns/{campaign_id}/category_rules | Get all category rules for a campaign
[**updateCategoryRule**](CategoryRulesApi.md#updateCategoryRule) | **PATCH** /category_rules/{id} | Update a category rule


<a name="createCategoryRule"></a>
# **createCategoryRule**
> CategoryRule createCategoryRule(campaignId, opts)

Create a category rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.CategoryRulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'categoryRule': new VoucheryApiReference.CategoryRule() // CategoryRule | 
};
apiInstance.createCategoryRule(campaignId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 
 **categoryRule** | [**CategoryRule**](CategoryRule.md)|  | [optional] 

### Return type

[**CategoryRule**](CategoryRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategoryRule"></a>
# **deleteCategoryRule**
> deleteCategoryRule(id)

Delete a category rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.CategoryRulesApi();
let id = 56; // Number | Rule ID
apiInstance.deleteCategoryRule(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rule ID | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryRule"></a>
# **getCategoryRule**
> CategoryRule getCategoryRule(id)

Get a category rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.CategoryRulesApi();
let id = 56; // Number | Rule ID
apiInstance.getCategoryRule(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rule ID | 

### Return type

[**CategoryRule**](CategoryRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryRules"></a>
# **getCategoryRules**
> [CategoryRule] getCategoryRules(campaignId)

Get all category rules for a campaign

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.CategoryRulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getCategoryRules(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 

### Return type

[**[CategoryRule]**](CategoryRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCategoryRule"></a>
# **updateCategoryRule**
> CategoryRule updateCategoryRule(id, opts)

Update a category rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.CategoryRulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'categoryRule': new VoucheryApiReference.CategoryRule() // CategoryRule | 
};
apiInstance.updateCategoryRule(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rule ID | 
 **categoryRule** | [**CategoryRule**](CategoryRule.md)|  | [optional] 

### Return type

[**CategoryRule**](CategoryRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

