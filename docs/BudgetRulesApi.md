# VoucheryApiReference.BudgetRulesApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBudgetRule**](BudgetRulesApi.md#createBudgetRule) | **POST** /campaigns/{campaign_id}/budget_rules | Create a budget rule
[**deleteBudgetRule**](BudgetRulesApi.md#deleteBudgetRule) | **DELETE** /budget_rules/{id} | Delete a rule
[**getBudgetRule**](BudgetRulesApi.md#getBudgetRule) | **GET** /budget_rules/{id} | Get a budget rule
[**getBudgetRules**](BudgetRulesApi.md#getBudgetRules) | **GET** /campaigns/{campaign_id}/budget_rules | Get all budget rules for a campaign
[**updateBudgetRule**](BudgetRulesApi.md#updateBudgetRule) | **PATCH** /budget_rules/{id} | Update a budget rule


<a name="createBudgetRule"></a>
# **createBudgetRule**
> BudgetRule createBudgetRule(campaignId, opts)

Create a budget rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.BudgetRulesApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'budgetRule': new VoucheryApiReference.BudgetRule() // BudgetRule | 
};
apiInstance.createBudgetRule(campaignId, opts, (error, data, response) => {
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
 **budgetRule** | [**BudgetRule**](BudgetRule.md)|  | [optional] 

### Return type

[**BudgetRule**](BudgetRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBudgetRule"></a>
# **deleteBudgetRule**
> deleteBudgetRule(id)

Delete a rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.BudgetRulesApi();
let id = 56; // Number | Rule ID
apiInstance.deleteBudgetRule(id, (error, data, response) => {
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

<a name="getBudgetRule"></a>
# **getBudgetRule**
> BudgetRule getBudgetRule(id)

Get a budget rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.BudgetRulesApi();
let id = 56; // Number | Rule ID
apiInstance.getBudgetRule(id, (error, data, response) => {
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

[**BudgetRule**](BudgetRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBudgetRules"></a>
# **getBudgetRules**
> [BudgetRule] getBudgetRules(campaignId)

Get all budget rules for a campaign

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.BudgetRulesApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getBudgetRules(campaignId, (error, data, response) => {
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

[**[BudgetRule]**](BudgetRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBudgetRule"></a>
# **updateBudgetRule**
> BudgetRule updateBudgetRule(id, opts)

Update a budget rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.BudgetRulesApi();
let id = 56; // Number | Rule ID
let opts = {
  'budgetRule': new VoucheryApiReference.BudgetRule() // BudgetRule | 
};
apiInstance.updateBudgetRule(id, opts, (error, data, response) => {
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
 **budgetRule** | [**BudgetRule**](BudgetRule.md)|  | [optional] 

### Return type

[**BudgetRule**](BudgetRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

