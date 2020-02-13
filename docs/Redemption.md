# VoucheryApi.Redemption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] [readonly] 
**transactionId** | **String** | Unique transaction ID which identifies underlying transaction in your system, e.g. order number, invoice number | 
**customerIdentifier** | **String** | A string uniquely identifying customer in your system. Please check customers API. | [optional] 
**totalTransactionCost** | **Number** |  | 
**ttl** | **Number** | How many minutes should the redemption be valid for before it expires. | [optional] 
**grantedDiscount** | **Number** |  | [optional] [readonly] 
**userAgent** | **String** |  | [optional] 
**voucher** | [**RedemptionVoucher**](RedemptionVoucher.md) |  | [optional] 
**confirmed** | **Boolean** | Only confirmed redemption are counted towards budget and total number of redemptions. | [optional] 
**productItems** | [**[RedemptionProductItems]**](RedemptionProductItems.md) | Array of product items, associated with a redemption | [optional] 
**validatedAt** | **Date** |  | [optional] [readonly] 
**expiresAt** | **Date** |  | [optional] [readonly] 
**confirmedAt** | **Date** |  | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: TypeEnum


* `Redemption` (value: `"Redemption"`)




