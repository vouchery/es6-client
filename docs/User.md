# VoucheryApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] [readonly] 
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | [optional] 
**email** | **String** |  | 
**team** | **[String]** |  | [optional] 
**role** | **String** |  | 
**accessScope** | **String** |  | 
**active** | **Boolean** |  | [optional] [readonly] 
**maskedApiKey** | **String** |  | [optional] [readonly] 
**lastSignInAt** | **Date** |  | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: TypeEnum


* `User` (value: `"User"`)





## Enum: RoleEnum


* `admin` (value: `"admin"`)

* `point_of_distribution` (value: `"point_of_distribution"`)

* `point_of_sale` (value: `"point_of_sale"`)





## Enum: AccessScopeEnum


* `project` (value: `"project"`)

* `campaign` (value: `"campaign"`)

* `team` (value: `"team"`)




