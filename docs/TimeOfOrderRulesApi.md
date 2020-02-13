# VoucheryApiReference.TimeOfOrderRulesApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeOfOrderRule**](TimeOfOrderRulesApi.md#createTimeOfOrderRule) | **POST** /campaigns/{campaign_id}/time_of_order_rules | Create a time of order rule
[**deleteTimeOfOrderRule**](TimeOfOrderRulesApi.md#deleteTimeOfOrderRule) | **DELETE** /time_of_order_rules/{id} | Delete a time of order rule
[**getTimeOfOrderRule**](TimeOfOrderRulesApi.md#getTimeOfOrderRule) | **GET** /time_of_order_rules/{id} | Get a time of order rule
[**getTimeOfOrderRules**](TimeOfOrderRulesApi.md#getTimeOfOrderRules) | **GET** /campaigns/{campaign_id}/time_of_order_rules | Get all time of order rules for a campaign
[**updateTimeOfOrderRule**](TimeOfOrderRulesApi.md#updateTimeOfOrderRule) | **PATCH** /time_of_order_rules/{id} | Update a time of order rule


<a name="createTimeOfOrderRule"></a>
# **createTimeOfOrderRule**
> TimeOfOrderRule createTimeOfOrderRule(campaignId, opts)

Create a time of order rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeOfOrderRulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'timeOfOrderRule': new VoucheryApiReference.TimeOfOrderRule() // TimeOfOrderRule | 
};
apiInstance.createTimeOfOrderRule(campaignId, opts, (error, data, response) => {
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
 **timeOfOrderRule** | [**TimeOfOrderRule**](TimeOfOrderRule.md)|  | [optional] 

### Return type

[**TimeOfOrderRule**](TimeOfOrderRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTimeOfOrderRule"></a>
# **deleteTimeOfOrderRule**
> deleteTimeOfOrderRule(id)

Delete a time of order rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeOfOrderRulesApi();
let id = 56; // Number | Rule ID
apiInstance.deleteTimeOfOrderRule(id, (error, data, response) => {
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

<a name="getTimeOfOrderRule"></a>
# **getTimeOfOrderRule**
> TimeOfOrderRule getTimeOfOrderRule(id)

Get a time of order rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeOfOrderRulesApi();
let id = 56; // Number | Time of order rule ID
apiInstance.getTimeOfOrderRule(id, (error, data, response) => {
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
 **id** | **Number**| Time of order rule ID | 

### Return type

[**TimeOfOrderRule**](TimeOfOrderRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTimeOfOrderRules"></a>
# **getTimeOfOrderRules**
> [TimeOfOrderRule] getTimeOfOrderRules(campaignId)

Get all time of order rules for a campaign

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeOfOrderRulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getTimeOfOrderRules(campaignId, (error, data, response) => {
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

[**[TimeOfOrderRule]**](TimeOfOrderRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTimeOfOrderRule"></a>
# **updateTimeOfOrderRule**
> TimeOfOrderRule updateTimeOfOrderRule(id, opts)

Update a time of order rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeOfOrderRulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'timeOfOrderRule': new VoucheryApiReference.TimeOfOrderRule() // TimeOfOrderRule | 
};
apiInstance.updateTimeOfOrderRule(id, opts, (error, data, response) => {
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
 **timeOfOrderRule** | [**TimeOfOrderRule**](TimeOfOrderRule.md)|  | [optional] 

### Return type

[**TimeOfOrderRule**](TimeOfOrderRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

