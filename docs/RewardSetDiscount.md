# VoucheryApi.RewardSetDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This reward sets specific discount for transaction amount during a redemption or order completion. | [default to &#39;set_discount&#39;]
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**discountType** | **String** | Discount type defines if a customer should receive a discount of 10% or $10 on their order. Gft Card type of reward works as a gift card: voucher can be used several times, discount value can be distributed to many transactions. | 
**discountValue** | **Number** |  | 



## Enum: TypeEnum


* `set_discount` (value: `"set_discount"`)





## Enum: DiscountTypeEnum


* `numeric` (value: `"numeric"`)

* `percentage` (value: `"percentage"`)

* `gift_card` (value: `"gift_card"`)




