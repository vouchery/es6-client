# VoucheryApi.RewardSetDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**discountType** | **String** | Discount type defines if a customer should receive a discount of 10% or $10 on their order. Gft Card type of reward works as a gift card: voucher can be used several times, discount value can be distributed to many transactions. | 
**discountValue** | **Number** |  | 



## Enum: TypeEnum


* `SetDiscount` (value: `"SetDiscount"`)





## Enum: DiscountTypeEnum


* `numeric` (value: `"numeric"`)

* `percentage` (value: `"percentage"`)

* `gift_card` (value: `"gift_card"`)




