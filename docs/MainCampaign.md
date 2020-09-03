# VoucheryApi.MainCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field is required only when you create a campaign. Main Campaign is a wrapper for multipe Sub Campaings, grouped together. Main Campaign can have own budget and redemptions limit. | 
**id** | **Number** |  | [optional] [readonly] 
**status** | **String** |  | [optional] 
**name** | **String** | The name of the campaign must be unique. | 
**template** | **String** | Valid template values for MainCampaign are: discount, loyalty, gift_card. | [optional] 
**description** | **String** |  | [optional] 
**maxTotalBudget** | **Number** | The budget available for all discount campaigns grouped by this campaign. | [optional] 
**maxRedemptions** | **Number** | The maximum number of redemptions available across all discount campaigns grouped by this campaign. | [optional] 
**team** | **String** |  | [optional] 
**budgetCode** | **String** |  | [optional] 
**children** | [**[SubCampaign]**](SubCampaign.md) | List of child campaigns | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**createdBy** | [**CampaignCreatedBy**](CampaignCreatedBy.md) |  | [optional] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**updatedBy** | [**CampaignCreatedBy**](CampaignCreatedBy.md) |  | [optional] 



## Enum: TypeEnum


* `MainCampaign` (value: `"MainCampaign"`)





## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `archived` (value: `"archived"`)





## Enum: TemplateEnum


* `discount` (value: `"discount"`)

* `loyalty` (value: `"loyalty"`)

* `gift_card` (value: `"gift_card"`)




