# VoucheryApi.TriggersApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrigger**](TriggersApi.md#createTrigger) | **POST** /triggers | Create a trigger



## createTrigger

> Trigger createTrigger(opts)

Create a trigger

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.TriggersApi();
let opts = {
  'trigger': new VoucheryApi.Trigger() // Trigger | 
};
apiInstance.createTrigger(opts, (error, data, response) => {
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
 **trigger** | [**Trigger**](Trigger.md)|  | [optional] 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

