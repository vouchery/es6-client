# VoucheryApi.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** |  | 
**events** | **[String]** |  | 
**type** | **String** |  | [optional] [readonly] 
**id** | **Number** |  | [optional] [readonly] 
**active** | **Boolean** |  | [optional] [readonly] 
**verificationCode** | **String** |  | [optional] [readonly] 
**urlVerified** | **Boolean** |  | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: [EventsEnum]


* `voucher_redeemed` (value: `"voucher_redeemed"`)

* `voucher_batch_created` (value: `"voucher_batch_created"`)

* `voucher_created` (value: `"voucher_created"`)

* `voucher_redemption_rejected` (value: `"voucher_redemption_rejected"`)

* `budget_limit_reached` (value: `"budget_limit_reached"`)

* `voucher_redemptions_limit_reached` (value: `"voucher_redemptions_limit_reached"`)

* `voucher_pool_reached` (value: `"voucher_pool_reached"`)





## Enum: TypeEnum


* `Subscription` (value: `"Subscription"`)




