# VoucheryApi.CampaignsApi

All URIs are relative to *https://preview.vouchery.io/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignsApi.md#createCampaign) | **POST** /campaigns | Create a campaign
[**deleteCampaign**](CampaignsApi.md#deleteCampaign) | **DELETE** /campaigns/{id} | Delete a campaign
[**findSubCampaigns**](CampaignsApi.md#findSubCampaigns) | **GET** /campaigns/sub | Get sub campaigns by params
[**getCampaign**](CampaignsApi.md#getCampaign) | **GET** /campaigns/{id} | Get a campaign
[**getCampaigns**](CampaignsApi.md#getCampaigns) | **GET** /campaigns | Get main campaigns with children by params
[**getMainCampaign**](CampaignsApi.md#getMainCampaign) | **GET** /main_campaigns/{id} | Get a main campaign
[**getMainCampaigns**](CampaignsApi.md#getMainCampaigns) | **GET** /main_campaigns | Get main campaigns with children by params
[**updateCampaign**](CampaignsApi.md#updateCampaign) | **PATCH** /campaigns/{id} | Update a campaign



## createCampaign

> Campaign createCampaign(opts)

Create a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new VoucheryApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.createCampaign(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaign

> deleteCampaign(id)

Delete a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let id = 56; // Number | Campaign ID
apiInstance.deleteCampaign(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findSubCampaigns

> [Campaign] findSubCampaigns(opts)

Get sub campaigns by params

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let opts = {
  'nameCont': "nameCont_example", // String | Name contains
  'statusEq': "statusEq_example", // String | Status
  'templateEq': "templateEq_example", // String | Template (type) of sub campaign
  'triggersOnEq': "triggersOnEq_example", // String | Triggers On
  'triggerNameCont': "triggerNameCont_example" // String | Trigger Name contains
};
apiInstance.findSubCampaigns(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameCont** | **String**| Name contains | [optional] 
 **statusEq** | **String**| Status | [optional] 
 **templateEq** | **String**| Template (type) of sub campaign | [optional] 
 **triggersOnEq** | **String**| Triggers On | [optional] 
 **triggerNameCont** | **String**| Trigger Name contains | [optional] 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaign

> Campaign getCampaign(id)

Get a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let id = 56; // Number | Campaign ID
apiInstance.getCampaign(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaigns

> [Campaign] getCampaigns(opts)

Get main campaigns with children by params

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let opts = {
  'nameCont': "nameCont_example", // String | Name contains
  'teamEq': "teamEq_example", // String | Team
  'statusEq': "statusEq_example", // String | Status
  'templateEq': "templateEq_example" // String | Template (promotion type) of main campaign
};
apiInstance.getCampaigns(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameCont** | **String**| Name contains | [optional] 
 **teamEq** | **String**| Team | [optional] 
 **statusEq** | **String**| Status | [optional] 
 **templateEq** | **String**| Template (promotion type) of main campaign | [optional] 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMainCampaign

> MainCampaign getMainCampaign(id)

Get a main campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let id = 56; // Number | Campaign ID
apiInstance.getMainCampaign(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 

### Return type

[**MainCampaign**](MainCampaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMainCampaigns

> [MainCampaign] getMainCampaigns(opts)

Get main campaigns with children by params

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let opts = {
  'nameCont': "nameCont_example", // String | Name contains
  'teamEq': "teamEq_example", // String | Teaml
  'statusEq': "statusEq_example", // String | Status
  'templateEq': "templateEq_example" // String | Template (promotion type) of main campaign
};
apiInstance.getMainCampaigns(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameCont** | **String**| Name contains | [optional] 
 **teamEq** | **String**| Teaml | [optional] 
 **statusEq** | **String**| Status | [optional] 
 **templateEq** | **String**| Template (promotion type) of main campaign | [optional] 

### Return type

[**[MainCampaign]**](MainCampaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCampaign

> Campaign updateCampaign(id, opts)

Update a campaign

### Example

```javascript
import VoucheryApi from 'vouchery_api';
let defaultClient = VoucheryApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VoucheryApi.CampaignsApi();
let id = 56; // Number | Campaign ID
let opts = {
  'UNKNOWN_BASE_TYPE': new VoucheryApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.updateCampaign(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Campaign ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

