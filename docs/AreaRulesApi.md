# VoucheryApiReference.AreaRulesApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAreaRule**](AreaRulesApi.md#createAreaRule) | **POST** /campaigns/{campaign_id}/area_rules | Create an area rule
[**deleteAreaRule**](AreaRulesApi.md#deleteAreaRule) | **DELETE** /area_rules/{id} | Delete an area rule
[**getAreaRule**](AreaRulesApi.md#getAreaRule) | **GET** /area_rules/{id} | Get an area rule
[**getAreaRules**](AreaRulesApi.md#getAreaRules) | **GET** /campaigns/{campaign_id}/area_rules | Get all area rules for a campaign
[**updateAreaRule**](AreaRulesApi.md#updateAreaRule) | **PATCH** /area_rules/{id} | Update an area rule rule


<a name="createAreaRule"></a>
# **createAreaRule**
> AreaRule createAreaRule(campaignId, opts)

Create an area rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.AreaRulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'areaRule': new VoucheryApiReference.AreaRule() // AreaRule | 
};
apiInstance.createAreaRule(campaignId, opts, (error, data, response) => {
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
 **areaRule** | [**AreaRule**](AreaRule.md)|  | [optional] 

### Return type

[**AreaRule**](AreaRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAreaRule"></a>
# **deleteAreaRule**
> deleteAreaRule(id)

Delete an area rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.AreaRulesApi();
let id = 56; // Number | Area Rule ID
apiInstance.deleteAreaRule(id, (error, data, response) => {
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
 **id** | **Number**| Area Rule ID | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAreaRule"></a>
# **getAreaRule**
> AreaRule getAreaRule(id)

Get an area rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.AreaRulesApi();
let id = 56; // Number | Rule ID
apiInstance.getAreaRule(id, (error, data, response) => {
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

[**AreaRule**](AreaRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAreaRules"></a>
# **getAreaRules**
> [AreaRule] getAreaRules(campaignId)

Get all area rules for a campaign

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.AreaRulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getAreaRules(campaignId, (error, data, response) => {
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

[**[AreaRule]**](AreaRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAreaRule"></a>
# **updateAreaRule**
> AreaRule updateAreaRule(id, opts)

Update an area rule rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.AreaRulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'areaRule': new VoucheryApiReference.AreaRule() // AreaRule | 
};
apiInstance.updateAreaRule(id, opts, (error, data, response) => {
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
 **areaRule** | [**AreaRule**](AreaRule.md)|  | [optional] 

### Return type

[**AreaRule**](AreaRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

