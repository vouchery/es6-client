# VoucheryApi.UsersApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get all users within a project



## getUsers

> [User] getUsers()

Get all users within a project

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApi.UsersApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

