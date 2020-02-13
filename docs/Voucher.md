# VoucheryApi.Voucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**campaignId** | **Number** |  | [optional] [readonly] 
**active** | **Boolean** |  | [readonly] 
**status** | **String** |  | [optional] 
**code** | **String** |  | 
**customerIdentifier** | **String** | A string uniquely identifying customer in your system. Please check customers API. | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `distributed` (value: `"distributed"`)

* `validated` (value: `"validated"`)

* `redeemed` (value: `"redeemed"`)

* `expired` (value: `"expired"`)




