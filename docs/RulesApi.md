# VoucheryApi.RulesApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRule**](RulesApi.md#createRule) | **POST** /campaigns/{campaign_id}/rules | Create a rule
[**deleteRule**](RulesApi.md#deleteRule) | **DELETE** /rules/{id} | Delete a rule
[**getRule**](RulesApi.md#getRule) | **GET** /rules/{id} | Get a rule
[**getRules**](RulesApi.md#getRules) | **GET** /campaigns/{campaign_id}/rules | Get all rules for a campaign
[**updateRule**](RulesApi.md#updateRule) | **PATCH** /rules/{id} | Update a rule



## createRule

> Rule createRule(campaignId, opts)

Create a rule

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'rule': new VoucheryApi.Rule() // Rule | 
};
apiInstance.createRule(campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 
 **rule** | [**Rule**](Rule.md)|  | [optional] 

### Return type

[**Rule**](Rule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRule

> deleteRule(id)

Delete a rule

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RulesApi();
let id = 56; // Number | Rule ID
apiInstance.deleteRule(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## getRule

> Rule getRule(id)

Get a rule

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RulesApi();
let id = 56; // Number | Rule ID
apiInstance.getRule(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rule ID | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRules

> [Rule] getRules(campaignId)

Get all rules for a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getRules(campaignId).then((data) => {
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

[**[Rule]**](Rule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRule

> Rule updateRule(id, opts)

Update a rule

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.RulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'rule': new VoucheryApi.Rule() // Rule | 
};
apiInstance.updateRule(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rule ID | 
 **rule** | [**Rule**](Rule.md)|  | [optional] 

### Return type

[**Rule**](Rule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

