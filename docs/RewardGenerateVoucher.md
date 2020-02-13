# VoucheryApi.RewardGenerateVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This reward generates voucher within specific subcampaign, that related only to particular customer. | [default to &#39;generate_voucher&#39;]
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**prefix** | **String** | A prefix in all generated vouchers. Needs to be unique within a project. | 
**codeType** | **String** | What characters should the code include. Possible choices are digits, letters, and mixed. | 
**randomPartLength** | **Number** | How long should the random part of the code be? Valid values are between 2 and 10. | [optional] 
**voucherCampaignId** | **Number** | Subcampaign ID, new voucher will be related to. | 



## Enum: TypeEnum


* `generate_voucher` (value: `"generate_voucher"`)





## Enum: CodeTypeEnum


* `mixed` (value: `"mixed"`)

* `digits` (value: `"digits"`)

* `letters` (value: `"letters"`)




