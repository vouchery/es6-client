# VoucheryApiReference.TimeframeRulesApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimeframeRule**](TimeframeRulesApi.md#createTimeframeRule) | **POST** /campaigns/{campaign_id}/timeframe_rules | Create a timeframe rule
[**deleteTimeframeRule**](TimeframeRulesApi.md#deleteTimeframeRule) | **DELETE** /timeframe_rules/{id} | Delete a timeframe rule
[**getTimeframeRule**](TimeframeRulesApi.md#getTimeframeRule) | **GET** /timeframe_rules/{id} | Get a timeframe rule
[**getTimeframeRules**](TimeframeRulesApi.md#getTimeframeRules) | **GET** /campaigns/{campaign_id}/timeframe_rules | Get all timeframe rules for a campaign
[**updateTimeframeRule**](TimeframeRulesApi.md#updateTimeframeRule) | **PATCH** /timeframe_rules/{id} | Update a timeframe rule


<a name="createTimeframeRule"></a>
# **createTimeframeRule**
> TimeframeRule createTimeframeRule(campaignId, opts)

Create a timeframe rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeframeRulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'timeframeRule': new VoucheryApiReference.TimeframeRule() // TimeframeRule | 
};
apiInstance.createTimeframeRule(campaignId, opts, (error, data, response) => {
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
 **timeframeRule** | [**TimeframeRule**](TimeframeRule.md)|  | [optional] 

### Return type

[**TimeframeRule**](TimeframeRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTimeframeRule"></a>
# **deleteTimeframeRule**
> deleteTimeframeRule(id)

Delete a timeframe rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeframeRulesApi();
let id = 56; // Number | Rule ID
apiInstance.deleteTimeframeRule(id, (error, data, response) => {
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

<a name="getTimeframeRule"></a>
# **getTimeframeRule**
> TimeframeRule getTimeframeRule(id)

Get a timeframe rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeframeRulesApi();
let id = 56; // Number | Rule ID
apiInstance.getTimeframeRule(id, (error, data, response) => {
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

[**TimeframeRule**](TimeframeRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTimeframeRules"></a>
# **getTimeframeRules**
> [TimeframeRule] getTimeframeRules(campaignId)

Get all timeframe rules for a campaign

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeframeRulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getTimeframeRules(campaignId, (error, data, response) => {
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

[**[TimeframeRule]**](TimeframeRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTimeframeRule"></a>
# **updateTimeframeRule**
> TimeframeRule updateTimeframeRule(id, opts)

Update a timeframe rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.TimeframeRulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'timeframeRule': new VoucheryApiReference.TimeframeRule() // TimeframeRule | 
};
apiInstance.updateTimeframeRule(id, opts, (error, data, response) => {
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
 **timeframeRule** | [**TimeframeRule**](TimeframeRule.md)|  | [optional] 

### Return type

[**TimeframeRule**](TimeframeRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

