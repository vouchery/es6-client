# VoucheryApiReference.MaxDiscountRuleApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMaxDiscountRule**](MaxDiscountRuleApi.md#createMaxDiscountRule) | **POST** /campaigns/{campaign_id}/max_discount_rule | Create the max discount rule
[**deleteMaxDiscountRule**](MaxDiscountRuleApi.md#deleteMaxDiscountRule) | **DELETE** /campaigns/{campaign_id}/max_discount_rule | Delete a rule
[**getMaxDiscountRule**](MaxDiscountRuleApi.md#getMaxDiscountRule) | **GET** /campaigns/{campaign_id}/max_discount_rule | Get the max discount rule
[**updateMaxDiscountRule**](MaxDiscountRuleApi.md#updateMaxDiscountRule) | **PATCH** /campaigns/{campaign_id}/max_discount_rule | Update the max discount rule


<a name="createMaxDiscountRule"></a>
# **createMaxDiscountRule**
> MaxDiscountRule createMaxDiscountRule(campaignId, opts)

Create the max discount rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.MaxDiscountRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'maxDiscountRule': new VoucheryApiReference.MaxDiscountRule() // MaxDiscountRule | 
};
apiInstance.createMaxDiscountRule(campaignId, opts, (error, data, response) => {
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
 **maxDiscountRule** | [**MaxDiscountRule**](MaxDiscountRule.md)|  | [optional] 

### Return type

[**MaxDiscountRule**](MaxDiscountRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMaxDiscountRule"></a>
# **deleteMaxDiscountRule**
> deleteMaxDiscountRule(campaignId)

Delete a rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.MaxDiscountRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.deleteMaxDiscountRule(campaignId, (error, data, response) => {
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
 **campaignId** | **Number**| Campaign ID | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMaxDiscountRule"></a>
# **getMaxDiscountRule**
> MaxDiscountRule getMaxDiscountRule(campaignId)

Get the max discount rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.MaxDiscountRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getMaxDiscountRule(campaignId, (error, data, response) => {
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

[**MaxDiscountRule**](MaxDiscountRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMaxDiscountRule"></a>
# **updateMaxDiscountRule**
> MaxDiscountRule updateMaxDiscountRule(campaignId, opts)

Update the max discount rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.MaxDiscountRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'maxDiscountRule': new VoucheryApiReference.MaxDiscountRule() // MaxDiscountRule | 
};
apiInstance.updateMaxDiscountRule(campaignId, opts, (error, data, response) => {
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
 **maxDiscountRule** | [**MaxDiscountRule**](MaxDiscountRule.md)|  | [optional] 

### Return type

[**MaxDiscountRule**](MaxDiscountRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

